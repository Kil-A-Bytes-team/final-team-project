import { PartialType } from "@nestjs/mapped-types";
import { SignupDto } from "src/auth/dto/signup.dto";

export class CreateStudentDto  extends PartialType(SignupDto){}
