import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from 'src/students/students.module';
import { JwtModule } from '@nestjs/jwt';
import env from 'src/env';
import { Otp, OtpSchema } from './entities/otp.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Otp.name, schema: OtpSchema}]),
    StudentsModule,
    JwtModule.register({
      global: true,
      secret: env.JWT_SECRET,
      signOptions: { expiresIn: '4h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
