import { Module } from '@nestjs/common';
import { NewsCategoriesService } from './news-categories.service';
import { NewsCategoriesController } from './news-categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  NewsCategory,
  NewsCategorySchema,
} from './entities/news-category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NewsCategory.name, schema: NewsCategorySchema },
    ]),
  ],
  controllers: [NewsCategoriesController],
  exports: [NewsCategoriesService],
  providers: [NewsCategoriesService],
})
export class NewsCategoriesModule {}
