import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

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

  @Prop()
  text: string;

  createdAt: Date;
  updatedAt: Date;
}
export const NewsSchema = SchemaFactory.createForClass(News);
