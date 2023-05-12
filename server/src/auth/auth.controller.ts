import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }
  @Post('/signup')
  signup(@Body() signupDto: SignupDto) {
    console.log('signupDTO:', signupDto);
    return this.authService.signup(signupDto);
  }
}
