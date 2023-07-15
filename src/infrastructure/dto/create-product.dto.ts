import { ApiProperty } from '@nestjs/swagger';
import {  IsInt, IsNumber, IsOptional, 
         IsPositive, IsString, MinLength 
} from 'class-validator';


export class CreateProductDto {

    @ApiProperty({
        example: 'un producto veraz',
        description: 'Product title',
        uniqueItems: true
    })
    @IsString()
    @MinLength(1)
    title: string;


    @ApiProperty({
        example: 400.000,
        description: 'Product price',
        default: 0.0
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    price: number;



    @ApiProperty({
        example: 'hoy este producto será publicado con todas las caracteristicas y descripciones posibles',
        description: 'Product ID',
    })
    @IsString()
    @IsOptional()
    description?: string;



    @ApiProperty({
        example: 10,
        description: 'Product stock ',
        default: 0
    })
    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;     
}
