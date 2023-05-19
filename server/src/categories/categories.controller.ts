import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    console.log(createCategoryDto);
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAllCategory();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.categoriesService.findOneCategory(_id);
  }

  @Patch(':_id')
  update(
    @Param('_id') _id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.updateCategory(_id, updateCategoryDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.categoriesService.removeCategory(_id);
  }
}
