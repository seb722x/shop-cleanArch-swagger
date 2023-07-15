import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';



//import { ProductsController } from './controllers/product.controller';
import { ProductsService } from './services/products.service';
import { Product } from 'src/infrastructure/entities/product.entity';
//import { DatabaseProductRepository } from 'src/infrastructure/repositories/product.repository.ts';
import { RepositoriesModule } from 'src/infrastructure/repositories/repository.module';

@Module({
  controllers: [],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([ Product ]),
    RepositoriesModule,
    
  ],
  exports: [
    ProductsService,
    TypeOrmModule,
  ]
})//
export class ProductsModule {}
