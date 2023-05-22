import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';
import { CategoriesModule } from './categories/categories.module';
import { NewsCategoriesModule } from './news-categories/news-categories.module';
import { BasketsModule } from './baskets/baskets.module';
import env from './env';

@Module({
  imports: [
    MongooseModule.forRoot(env.MONGO_URL),
    CoursesModule,
    StudentsModule,
    AuthModule,
    NewsModule,
    CategoriesModule,
    NewsCategoriesModule,
    BasketsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
