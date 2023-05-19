import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

@Schema({ timestamps: true })
export class NewsCategory {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  slug: string;

  createdAt: Date;
  updatedAt: Date;
}
export const NewsCategorySchema = SchemaFactory.createForClass(NewsCategory);
