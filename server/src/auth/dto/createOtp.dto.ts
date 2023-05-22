import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateOTPDto {
    @IsString()
    @IsEmail()
    email: string;


  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  repassword: string;
}