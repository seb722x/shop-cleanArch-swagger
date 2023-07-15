import { ApiProperty } from '@nestjs/swagger';
import {  Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'products' })
export class Product {

    @ApiProperty({
        example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
        description: 'Product ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'un producto veraz',
        description: 'Product title',
        uniqueItems: true
    })
    @Column('text', {
        unique: true,
    })
    title: string;

    @ApiProperty({
        example: 400.000,
        description: 'Product price',
        default: 0.0
    })
    @Column('float',{
        default: 0
    })
    price: number;

    @ApiProperty({
        example: 'hoy este producto será publicado con todas las caracteristicas y descripciones posibles',
        description: 'Product ID',
        
    })
    @Column({
        type: 'text',
        nullable: true
    })
    description: string;

    @ApiProperty({
        example: 10,
        description: 'Product stock ',
        default: 0
    })
    @Column('int', {
        default: 0
    })
    stock: number;

}