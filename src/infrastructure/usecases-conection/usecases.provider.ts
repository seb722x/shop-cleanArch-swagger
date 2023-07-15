// usecases.providers.ts

import { DatabaseProductRepository } from '../repositories/product.repository';
import { UsecaseInstance } from './usecasesInstance';
import { findAllUseCases } from 'src/usecases/products/findAllProduct.usecases';
import { CreateProductUseCases } from 'src/usecases/products/createProduct.usecases';
import { deleteProductUsecases } from 'src/usecases/products/deleteAllProducts.usecases';

export const findAllProvider = {
  inject: [DatabaseProductRepository],
  provide: 'FindAllProductsInstance',
  useFactory: (productRepository: DatabaseProductRepository) => new UsecaseInstance(new findAllUseCases(productRepository)),
};

export const createProductProvider = { 
  inject: [DatabaseProductRepository],   // Dependencis a inyectar en la función
  provide: 'CreateProductInstance',    //nombre para la instancia del caso de uso cuando se inyecte 
  useFactory: (productRepository: DatabaseProductRepository) => new UsecaseInstance(new CreateProductUseCases(productRepository)),
};  //función que se ejecutará para construir la instancia del caso de uso findAllUseCases. 
    //se crea una instancia de UsecaseInstance que se inicializa con una instancia de findAllUseCases que a su vez recibe 
    //como argumento una instancia de DatabaseProductRepository.

export const deleteAllProductsProvider = {
  inject: [DatabaseProductRepository],
  provide: 'DeleteAllProductsInstance',
  useFactory: (productRepository: DatabaseProductRepository) => new UsecaseInstance(new deleteProductUsecases(productRepository)),

  //useFactory crea una instancia de uso del caso. Se recibe una instancia de DATABASEPRODUCTREPOSITORY, se devuelve una instancia de usecaseinstance 
  //que asu vez devuelve una de findallusecases el cual recibe la instancia de databaseproductrepository como argumento
};

export const usecasesProviders = [
  findAllProvider,
  createProductProvider,
  deleteAllProductsProvider,
];

export const FIND_ALL_PRODUCTS_INSTANCE = 'FindAllProductsInstance';
export const CREATE_PRODUCT_INSTANCE = 'CreateProductInstance';
export const DELETE_ALL_PRODUCTS_INSTANCE = 'DeleteAllProductsInstance';