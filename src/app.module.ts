import { Module } from '@nestjs/common';

//import { ProductsService } from './products/services/products.service';
//import { ProductsController } from './products/controllers/product.controller';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { UsecasesInstanceModule } from './infrastructure/usecases-conection/usecases-Instance.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
//import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [TypeOrmConfigModule, 
    ControllersModule,
    UsecasesInstanceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
