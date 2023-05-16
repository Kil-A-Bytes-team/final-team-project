import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsDto } from './create-news.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
            @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;


    @IsString()
    imageUrl: string;
}
