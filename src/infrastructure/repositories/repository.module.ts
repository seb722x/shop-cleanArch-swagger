
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module'; //TODO   //TODO  

import { Product } from '../entities/product.entity';  
import { DatabaseProductRepository } from './product.repository';



@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Product])],
  providers: [DatabaseProductRepository],
  exports: [DatabaseProductRepository],
})
export class RepositoriesModule {}
