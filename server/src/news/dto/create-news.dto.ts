import { IsNotEmpty, IsString } from "class-validator";

export class CreateNewsDto {
        @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;


    @IsString()
    imageUrl: string;


}
