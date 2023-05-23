import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { nanoid } from 'nanoid';
import { Category } from 'src/categories/entities/category.entity';

@Schema({ timestamps: true })
export class Course {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: String, ref: 'Category' })
  category: Category;

  @Prop()
  description: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  videoUrl: string;

  @Prop({ default: 0 })
  price: string;

  createdAt: Date;
  updatedAt: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
