import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateJobDto {
  @IsString()
  name: string;

  @IsString()
  job_id: string;

  @IsString()
  @IsOptional()
  short_description: string;

  @IsString()
  @IsOptional()
  long_description: string;

  @IsString()
  @IsOptional()
  company: string;

  @IsNumber()
  @IsOptional()
  minExperience: number;

  @IsNumber()
  @IsOptional()
  maxExperience: number;

  @IsString()
  @IsOptional()
  unique_link: string;

  @IsString()
  @IsOptional()
  job_apply_link: string;

  @IsNumber()
  status: number;

  @IsArray()
  keywords: string[];

  @IsString()
  lastEditedBy: string;

  @IsString()
  contactPersonEmail: string;
}
