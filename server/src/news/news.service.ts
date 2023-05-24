import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './entities/news.entity';
import { Model } from 'mongoose';
import { NewsCategory } from 'src/news-categories/entities/news-category.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private newsModel: Model<News>,
    @InjectModel(NewsCategory.name)
    private NewsCategoryModel: Model<NewsCategory>,
  ) {}

  async getTotalNews() {
    return await this.newsModel.count();
  }

  async createNews(createNewsDto: CreateNewsDto): Promise<News> {
    const createdNews = new this.newsModel(createNewsDto);
    return (await createdNews.save()).populate('newsCategory');
  }
  async findAllNews(): Promise<News[]> {
    return await this.newsModel.find().populate('newsCategory');
  }
  async findOneNews(_id: string): Promise<News | null> {
    const result = await this.newsModel.findById(_id);
    if (!result) return null;
    result.populate('newsCategory');
    return result;
  }

  async updateNews(_id: string, updateNewsDto: UpdateNewsDto): Promise<News> {
    return await this.newsModel.findByIdAndUpdate({ _id }, updateNewsDto);
  }

  async removeNews(_id: string): Promise<News> {
    return await this.newsModel.findByIdAndDelete({ _id });
  }
}
