import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SigninDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password: string;
}
