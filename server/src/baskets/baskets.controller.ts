import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { Student } from 'src/students/entities/student.entity';
import { Secured } from 'src/auth/secured.decorator';

@Secured()
@Controller('baskets')
export class BasketsController {
  constructor(private readonly basketsService: BasketsService) {}

  @Get('main')
  findOne(@CurrentUser() student: Student) {
    return this.basketsService.findMainBasket(student._id);
  }

  @Post('/add') 
  addCourse(@CurrentUser() student: Student, @Body('courseId') courseId: string, @Body('quantity') quantity: number){
    return this.basketsService.addCourseToBasket(student._id, courseId, quantity);
  }
  @Delete('/remove')
  removeCourse(@CurrentUser() student: Student, @Query('courseId') courseId: string){
    return this.basketsService.removeItem(student._id, courseId)
  }
}
