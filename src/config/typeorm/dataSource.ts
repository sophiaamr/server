import env from '../../config/env';
import { DataSource } from 'typeorm';
import * as path from 'node:path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const options: PostgresConnectionOptions = {
  type: 'postgres',
  url: env().database.url,
  synchronize: true,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
  logging: ['error'],
  entities: [
    path.join(__dirname, '..', '..', 'shared', 'entities', '*.entity.{ts,js}'),
  ],
};

export const dataSource = new DataSource({ ...options });
