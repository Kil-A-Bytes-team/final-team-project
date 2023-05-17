import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {

  constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {}

   async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return await createdCategory.save();
  }
   async findAllCategory(): Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }
  async findOneCategory(_id: string): Promise<Category | null> {
    return await this.categoryModel.findById({_id})
  }

  async updateCategory(_id: string, updateCategoryDto: UpdateCategoryDto):Promise<Category> {
    return await this.categoryModel.findByIdAndUpdate({_id}, updateCategoryDto);
  }

  async removeCategory(_id: string):Promise<Category> {
    return await this.categoryModel.findByIdAndDelete({_id});
  }
}
