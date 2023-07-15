

import { IProductRepository } from "src/domain/repository/productRepository.interface";


export class deleteProductUsecases {
  constructor( private readonly productRepository: IProductRepository) {}

  async execute(): Promise<void> {
    await this.productRepository.deleteAllProducts();
  }
}

