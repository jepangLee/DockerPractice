import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DtoUploadOption {
  @ApiProperty() @IsNumber()
  public readonly g_id: number;
  @ApiProperty() @IsString()
  public readonly name: string;
  @ApiProperty() @IsNumber()
  public readonly price: number;
}
