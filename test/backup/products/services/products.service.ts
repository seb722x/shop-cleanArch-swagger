import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { ProductModel } from 'src/domain/model/product.model';
import { DatabaseProductRepository } from 'src/infrastructure/repositories/product.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: DatabaseProductRepository) {}

  async create(product: ProductModel): Promise<ProductModel> {
    try {
      return await this.productRepository.create(product);

    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException('Product already exists');
      } else {
        throw new InternalServerErrorException('Unexpected error creating product');
      }
    }
  }

  async findAll(): Promise<ProductModel[]> {
    try {
      const products = await this.productRepository.findAll();
      return products;
    } catch (error) {
      throw new InternalServerErrorException('Unexpected error retrieving products');
    }
  }

  async deleteAllProducts(): Promise<void> {
    try {
      await this.productRepository.deleteAllProducts();
    } catch (error) {
      throw new InternalServerErrorException('Unexpected error deleting products');
    }
  }
}