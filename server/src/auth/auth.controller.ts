import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { CreateOTPDto } from './dto/createOtp.dto';
import { CheckOTPDto } from './dto/checkOtp.dto';
import { CurrentUser } from './current-user.decorator';
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }
  @Get('/currentUser')
  currentUser(@CurrentUser() currentUser) {
    console.log(`current user is : ${currentUser}`);
    return currentUser;
  }

  @Post('/signup')
  signup(@Body() signupDto: SignupDto) {
    console.log('signupDTO:', signupDto);
    return this.authService.signup(signupDto);
  }
  @Post('/signin')
  signin(@Body() signinDto: SigninDto) {
    console.log('signinDto:', signinDto);
    return this.authService.signin(signinDto);
  }
  @Post('/otp/signup')
  siginOTP(@Body() createOTPDto: CreateOTPDto) {
    return this.authService.createOTP(createOTPDto);
  }

  @Post('/otp/signup/verify')
  siginOTPConfirm(@Body() checkOTPDto: CheckOTPDto) {
    return this.authService.verifyOTP(checkOTPDto);
  }
}
