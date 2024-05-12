// update-house-cleaning.dto.ts
// update-house-cleaning.dto.ts
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateHouseCleaningDto {
  @IsOptional()
  @IsString()
  public readonly name?: string;

  @IsOptional()
  @IsString()
  public readonly location?: string;

  @IsOptional()
  @IsString()
  public readonly contactInfo?: string;

  @IsOptional()
  @IsNumber()
  public readonly rate?: number;
}

