import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.createCourse(createCourseDto);
  }

  @Get('total')
  getTotal(){
    return this.coursesService.getTotalCourse()
  }
  @Get()
  findAll() {
    return this.coursesService.findAllCourse();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.coursesService.findOneCourse(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.updateCourse(_id, updateCourseDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.coursesService.removeCourse(_id);
  }
}
