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

  @Prop()
  categoryId: string

  @Prop({type: Types.ObjectId, ref: 'Category'})
  category: {
    name:string
}

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

// CourseSchema.virtual('category', {
//   ref: 'Category',
//   localField: 'categoryId',
//   foreignField: '_id',
//   justOne: true,
// });
