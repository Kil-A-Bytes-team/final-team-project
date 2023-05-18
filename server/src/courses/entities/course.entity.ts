import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

@Schema({ timestamps: true })
export class Course {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  videoUrl: string;

  @Prop({ default: 0 })
  rating: number;

  @Prop({ default: 0 })
  price: number;

  @Prop({ default: 0 })
  viewCount: number;

  createdAt: Date;
  updatedAt: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
