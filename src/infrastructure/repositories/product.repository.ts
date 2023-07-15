//product.repository.ts


import { Injectable , BadRequestException, InternalServerErrorException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IProductRepository } from 'src/domain/repository/productRepository.interface';
import { ProductModel } from 'src/domain/model/product.model';
import { Product } from '../entities/product.entity';




@Injectable()
export class DatabaseProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productEntityRepository: Repository<Product>,
    

  ) {}
 

  async create(product: ProductModel): Promise<ProductModel> {
    try { const productEntity = this.toProductEntity(product);
    const result = await this.productEntityRepository.insert(productEntity);
    return this.toProduct(result.generatedMaps[0] as Product);
    } catch(error) {
      if (error.code === '23505') {
        throw new BadRequestException('Product already exists');
      } else {
        throw new InternalServerErrorException('Unexpected error creating product');
      }
    }
    //console.log(result.generatedMaps);
  }



  async findAll():Promise<ProductModel[]>{
    try {const productEntity = await this.productEntityRepository.find();
    return productEntity.map((todoEntity) => this.toProduct(todoEntity));
    } catch (error) {
      throw new InternalServerErrorException('Unexpected error retrieving products');
    }
  }

   async deleteAllProducts():Promise<void> {
      try {
        await this.productEntityRepository.delete({});
      }catch (error) {
        throw new InternalServerErrorException('Unexpected error deleting products');
      }
    
   }  

  private toProduct(productEntity: Product): ProductModel {
    const product: ProductModel = new ProductModel();

    
    product.price = productEntity.price;
    product.stock = productEntity.stock;
    product.description = productEntity.description;
    product.title = productEntity.title;

    return product;
  }




  private toProductEntity(product: ProductModel): Product {
    const productEntity: Product = new Product();

    productEntity.title = product.title;
    productEntity.price = product.price;
    productEntity.stock = product.stock;
    productEntity.description = product.description;

    return productEntity;
  }
}