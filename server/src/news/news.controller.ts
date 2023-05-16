import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.createNews(createNewsDto);
  }
  @Get('total')
  getTotalNews(){
    return this.newsService.getTotalNews();
  }
  @Get()
  findAll() {
    return this.newsService.findAllNews();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.newsService.findOneNews(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.updateNews(_id, updateNewsDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.newsService.removeNews(_id);
  }
}
