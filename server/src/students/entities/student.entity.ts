import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

@Schema({ timestamps: true })
export class Student {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name:string;

  @Prop()
  display_name: string;
  
  @Prop()
  phone_number: number;

  @Prop()
  imageUrl: string;

  @Prop()
  password: string;

  createdAt: Date;
  updatedAt: Date;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
