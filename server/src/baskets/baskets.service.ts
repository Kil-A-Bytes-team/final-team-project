import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Basket } from './entities/basket.entity';
import { Model } from 'mongoose';
import { CoursesService } from 'src/courses/courses.service';

@Injectable()
export class BasketsService {
  constructor(@InjectModel(Basket.name) private readonly basketModel: Model<Basket>, private readonly coursesService: CoursesService){}

  async findMainBasket(studentId: string) {
    let mainBasket: Basket = await this.basketModel.findOne({studentId, isMain: true});
    if(!mainBasket) {
      mainBasket = await this.createNewMainBasket(studentId)
    }
    return mainBasket;
  }

  async createNewMainBasket(studentId: string) {
    return (await this.basketModel.create({ studentId , isMain: true }));
  }

  async removeItem(studentId: string, courseId: string){
    let mainBasket = await this.findMainBasket(studentId)
    if(!mainBasket.items) {
      throw new BadRequestException('Ustgah course algaa');
    } else {
        const filteredItems = { items: mainBasket.items?.filter(item => item.courseId !== courseId)}
        await this.basketModel.findOneAndUpdate({studentId}, {items:filteredItems.items});
      }
      return mainBasket;
  }

  async addCourseToBasket(studentId: string, courseId: string, quantity: number){
    const mainBasket = await this.findMainBasket(studentId);
    const course = this.coursesService.findOneCourse(courseId);
    if(!course){
      throw new BadRequestException('Course not found');
    }
    console.log('courseId :', courseId);
    let updatedQuantity = false;
    if(!mainBasket.items) {
      mainBasket.items = [{ courseId, quantity }];
    } else {
      mainBasket.items = mainBasket.items?.map((item)=>{
        if(item.courseId === courseId) {
          item.quantity += quantity;
          updatedQuantity = true
        }
        return item
      });
      if(!updatedQuantity){
        mainBasket.items.push({ courseId , quantity})
      }
    }

    const { _id , ...updatedBasket } = mainBasket;
    await this.basketModel.findOneAndUpdate({_id}, updatedBasket);
    return mainBasket
  }
}
