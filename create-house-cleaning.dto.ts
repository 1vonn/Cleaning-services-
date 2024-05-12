// create-house-cleaning.dto.ts
// create-house-cleaning.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateHouseCleaningDto {
  @IsString()
  public readonly name: string;

  @IsString()
  public readonly location: string;

  @IsString()
  public readonly contactInfo: string;

  @IsNumber()
  public readonly rate: number;
}

