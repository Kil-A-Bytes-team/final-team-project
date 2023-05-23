import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController, SearchController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './entities/course.entity';
import {
  Category,
  CategorySchema,
} from 'src/categories/entities/category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CoursesController , SearchController],
  exports: [CoursesService],
  providers: [CoursesService],
})
export class CoursesModule {}
