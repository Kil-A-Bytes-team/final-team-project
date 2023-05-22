import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './entities/course.entity';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class CoursesService {
   constructor(@InjectModel(Course.name) private courseModel: Model<Course>,
   @InjectModel(Category.name) private categoryModel: Model<Category>,) {}

   async getTotalCourse(){
    return await this.courseModel.count();
   }

   async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCourse = new this.courseModel(createCourseDto);
    return await createdCourse.save();
  }
   async findAllCourse(): Promise<Course[]> {
    return await this.courseModel.find().populate("category").exec();
  }
  async findOneCourse(_id: string): Promise<Course | null> {
    return await this.courseModel.findById({_id})
  }

  async updateCourse(_id: string, updateCourseDto: UpdateCourseDto):Promise<Course> {
    return await this.courseModel.findByIdAndUpdate({_id}, updateCourseDto);
  }

  async removeCourse(_id: string):Promise<Course> {
    return await this.courseModel.findByIdAndDelete({_id});
  }
}
