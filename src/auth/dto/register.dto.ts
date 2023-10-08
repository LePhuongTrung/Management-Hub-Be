import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsInt,
  IsEnum,
  Validate,
} from 'class-validator';

import { Gender } from '@enums/gender.enum';
import { ExpiresInValidator } from '@module/auth/dto/expires-in.validator';

export class RegisterDto {
  @IsOptional()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsInt()
  roleId: number;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsInt()
  restaurantId: number;

  @IsNotEmpty()
  @IsInt()
  brandId: number;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsInt()
  @IsEnum(Gender)
  gender: Gender;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  @Validate(ExpiresInValidator)
  tokenDate: string;
}
