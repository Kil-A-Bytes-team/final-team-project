import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsCategoryDto } from './create-news-category.dto';
import { IsString } from 'class-validator';

export class UpdateNewsCategoryDto extends PartialType(CreateNewsCategoryDto) {
  @IsString()
  name: string;
}
