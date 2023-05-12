import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { StudentsService } from 'src/students/students.service';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    // @InjectModel() private readonly otpmodel: Model<Otp>,
    private readonly studentsService: StudentsService,
    private readonly jwtService: JwtService,
  ) {}
  async signup(signupDto: SignupDto) {
    console.log(signupDto);
    const { email } = signupDto;
    console.log(email);
    const user = await this.studentsService.findOneByEmail(email);
    if (user)
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    if (signupDto.password !== signupDto.repassword)
      throw new HttpException(
        'Repeating password is not matching',
        HttpStatus.BAD_REQUEST,
      );
    const password = bcrypt.hashSync(signupDto.password, 10);
    return await this.studentsService.create({ ...signupDto, password });
  }
}
