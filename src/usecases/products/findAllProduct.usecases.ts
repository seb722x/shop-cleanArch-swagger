import { ProductModel } from "src/domain/model/product.model";
import { IProductRepository } from "src/domain/repository/productRepository.interface";

export class findAllUseCases {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(): Promise<ProductModel[]> {
    return await this.productRepository.findAll();
  }
}
