//controllers.module.ts

//import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsController } from './products/product.controller';
import { UsecasesInstanceModule } from '../usecases-conection/usecases-Instance.module';


@Module({
  controllers: [ProductsController],
  imports: [
    UsecasesInstanceModule,
    
  ]
})
export class ControllersModule {}
