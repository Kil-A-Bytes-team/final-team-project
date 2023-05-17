import { IsEmail, IsString } from "class-validator";

export class CreateOTPDto {
    @IsString()
    @IsEmail()
    email: string;
}