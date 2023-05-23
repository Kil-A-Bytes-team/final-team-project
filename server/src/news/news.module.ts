import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { News, NewsSchema } from './entities/news.entity';
import {
  NewsCategory,
  NewsCategorySchema,
} from 'src/news-categories/entities/news-category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: News.name, schema: NewsSchema },
      { name: NewsCategory.name, schema: NewsCategorySchema },
    ]),
  ],
  controllers: [NewsController],
  exports: [NewsService],
  providers: [NewsService],
})
export class NewsModule {}
