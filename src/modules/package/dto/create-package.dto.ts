import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { packageStatus } from '@shared/enums/packageStatus.enum';
export class CreatePackageDto {
  @ApiProperty({ example: 'Amazon' })
  @IsString()
  store: string;

  @ApiProperty({ example: '123456789', required: false })
  @IsString()
  @IsOptional()
  keyword?: string;

  @ApiProperty({ example: '2025-04-10' })
  @IsDateString()
  estimatedDelivery: string;

  //@ApiProperty({ example: '1' })
  //@IsInt()
  //@IsPositive()
  //@IsNotEmpty()
  //apartamentoId: number;

  @ApiProperty({ example: 'João da Silva' })
  @IsString()
  recipient: string;

   @ApiProperty({ example: 'PENDENTE' })
  @IsIn([packageStatus.PENDENTE, packageStatus.ATRASADO, packageStatus.CANCELADO, packageStatus.ENTREGUE])
  status: packageStatus;
}
