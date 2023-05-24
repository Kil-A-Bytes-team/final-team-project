import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketsController } from './baskets.controller';
import { CoursesModule } from 'src/courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Basket, BasketSchema } from './entities/basket.entity';

@Module({
  imports: [CoursesModule, MongooseModule.forFeature([{ name: Basket.name , schema: BasketSchema}])],
  controllers: [BasketsController],
  providers: [BasketsService]
})
export class BasketsModule {}
