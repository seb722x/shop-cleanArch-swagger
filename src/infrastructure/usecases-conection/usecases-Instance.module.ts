//usecases-Instance.module.ts



import {  Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repository.module';
import {  usecasesProviders, FIND_ALL_PRODUCTS_INSTANCE, CREATE_PRODUCT_INSTANCE, DELETE_ALL_PRODUCTS_INSTANCE } from './usecases.provider';


@Module({
  imports: [ RepositoriesModule],
  providers: [...usecasesProviders],
  exports: [FIND_ALL_PRODUCTS_INSTANCE, CREATE_PRODUCT_INSTANCE, DELETE_ALL_PRODUCTS_INSTANCE],
})
export class UsecasesInstanceModule {
  
  }
  
  










 // static FIND_ALL_PRODUCTS_INSTANCE = 'getProductsUsecasesProxy';
 // static CREATE_PRODUCT_INSTANCE = 'postProduductsUsecasesProxy';
 // static DELETE_ALL_PRODUCTS_INSTANCE = 'deleteProductsUsecasesProxy';
//
 // static register(): DynamicModule {
 //   return {
 //     module: UsecasesInstanceModule,
 //     providers: [
 //      
 //       {
 //         inject: [DatabaseProductRepository],
 //         provide: UsecasesInstanceModule.FIND_ALL_PRODUCTS_INSTANCE,
 //         useFactory: (productRepository: DatabaseProductRepository) => new UsecaseInstance(new findAllUseCases(productRepository)),
 //       },
 //       {
 //         inject: [ DatabaseProductRepository],
 //         provide: UsecasesInstanceModule.CREATE_PRODUCT_INSTANCE,
 //         useFactory: ( productRepository: DatabaseProductRepository) =>
 //           new UsecaseInstance(new CreateProductUseCases( productRepository)),
 //       },
 //       
 //       {
 //         inject: [ DatabaseProductRepository],
 //         provide: UsecasesInstanceModule.DELETE_ALL_PRODUCTS_INSTANCE,
 //         useFactory: ( productRepository: DatabaseProductRepository) =>
 //           new UsecaseInstance(new deleteProductUsecases( productRepository)),
 //       },
 //     ],
 //     exports: [
 //       UsecasesInstanceModule.FIND_ALL_PRODUCTS_INSTANCE,
 //       UsecasesInstanceModule.CREATE_PRODUCT_INSTANCE,
 //       UsecasesInstanceModule.DELETE_ALL_PRODUCTS_INSTANCE,
 //       
 //     ],
 //   };
 // }

