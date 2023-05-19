import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsCategoriesService } from './news-categories.service';
import { CreateNewsCategoryDto } from './dto/create-news-category.dto';
import { UpdateNewsCategoryDto } from './dto/update-news-category.dto';
@Controller('news-categories')
export class NewsCategoriesController {
  constructor(private readonly newsCategoriesService: NewsCategoriesService) {}

  @Post()
  create(@Body() createNewsCategoryDto: CreateNewsCategoryDto) {
    console.log(createNewsCategoryDto);
    return this.newsCategoriesService.createNewsCategory(createNewsCategoryDto);
  }

  @Get()
  findAll() {
    return this.newsCategoriesService.findAllCategory();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.newsCategoriesService.findOneCategory(_id);
  }

  @Patch(':_id')
  update(
    @Param('_id') _id: string,
    @Body() updateNewsCategoryDto: UpdateNewsCategoryDto,
  ) {
    return this.newsCategoriesService.updateNewsCategory(
      _id,
      updateNewsCategoryDto,
    );
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.newsCategoriesService.removeNewsCategory(_id);
  }
}
