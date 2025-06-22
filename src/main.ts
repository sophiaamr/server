import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import env from './config/env';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.setGlobalPrefix('api');

  // O Render define a porta através da variável de ambiente process.env.PORT
  const port = process.env.PORT || env().application.port;
  const logger = new Logger('NestApplication');

  const config = new DocumentBuilder()
    .setTitle('Chama o Síndico Backend')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  // A chamada await app.startAllMicroservices() foi removida.

  // Inicia o servidor HTTP para ouvir as requisições da API
  await app.listen(port, '0.0.0.0', () =>
    logger.log(`API is running on port ${port}`),
  );
}

bootstrap();
