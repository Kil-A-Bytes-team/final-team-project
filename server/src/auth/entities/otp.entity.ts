import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';
import { generateRandomNumber } from 'src/utils/generateNumber';

@Schema({ timestamps: true })
export class Otp {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({
    required: true,
    default: () => generateRandomNumber(100000, 1000000 - 1),
  })
  token: number;

  createdAt: Date;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);
