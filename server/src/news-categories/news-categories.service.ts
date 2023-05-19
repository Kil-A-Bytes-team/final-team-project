import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewsCategory } from './entities/news-category.entity';
import { CreateNewsCategoryDto } from './dto/create-news-category.dto';
import { UpdateNewsCategoryDto } from './dto/update-news-category.dto';

@Injectable()
export class NewsCategoriesService {
  constructor(
    @InjectModel(NewsCategory.name)
    private newsCategoryModel: Model<NewsCategory>,
  ) {}

  async createNewsCategory(
    createNewsCategoryDto: CreateNewsCategoryDto,
  ): Promise<NewsCategory> {
    const createdNewsCategory = new this.newsCategoryModel(
      createNewsCategoryDto,
    );
    return await createdNewsCategory.save();
  }
  async findAllCategory(): Promise<NewsCategory[]> {
    return await this.newsCategoryModel.find().exec();
  }
  async findOneCategory(_id: string): Promise<NewsCategory | null> {
    return await this.newsCategoryModel.findById({ _id });
  }

  async updateNewsCategory(
    _id: string,
    updateCategoryDto: UpdateNewsCategoryDto,
  ): Promise<NewsCategory> {
    return await this.newsCategoryModel.findByIdAndUpdate(
      { _id },
      updateCategoryDto,
    );
  }

  async removeNewsCategory(_id: string): Promise<NewsCategory> {
    return await this.newsCategoryModel.findByIdAndDelete({ _id });
  }
}
