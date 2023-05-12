import { Injectable } from '@nestjs/common';
import {
  IsEmail,
  IsNotEmpty,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { StudentsService } from 'src/students/students.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly studentsService: StudentsService) {}

  async validate(email: string, args: ValidationArguments): Promise<boolean> {
    const student = await this.studentsService.findOneByEmail(email);
    return !student;
  }

  defaultMessage(args: ValidationArguments): string {
    return 'Email already exists';
  }
}

export class SignupDto {
  @IsNotEmpty()
  @IsEmail()
  @Validate(IsEmailUniqueConstraint)
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  repassword: string;
}
