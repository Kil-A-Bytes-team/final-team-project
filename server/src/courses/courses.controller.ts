import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { log } from 'console';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.createCourse(createCourseDto);
  }

  @Get('total')
  getTotal() {
    return this.coursesService.getTotalCourse();
  }
  @Get()
  findAll(@Query('search') search: string) {
    return this.coursesService.findAllCourse(search);
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
@Controller('search')
export class SearchController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  findAll(@Query('key') key: string) {
    console.log('key', key);

    return this.coursesService.findAllCourseByKey(key);
  }
}
