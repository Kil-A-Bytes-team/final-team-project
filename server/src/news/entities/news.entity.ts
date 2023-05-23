import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { nanoid } from 'nanoid';
import { type } from 'os';
import { NewsCategory } from 'src/news-categories/entities/news-category.entity';

@Schema({ timestamps: true })
export class News {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop({ type: String, ref: 'NewsCategory' })
  newsCategory: NewsCategory;

  @Prop()
  text: string;

  createdAt: Date;
  updatedAt: Date;
}
export const NewsSchema = SchemaFactory.createForClass(News);
