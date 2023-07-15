import { ProductModel } from "src/domain/model/product.model";
import { IProductRepository } from "src/domain/repository/productRepository.interface";


export class CreateProductUseCases {
  constructor( private readonly productRepository: IProductRepository) {}

  async execute(title: string, price: number, description:string, stock: number): Promise<ProductModel> {
    
    const product = new ProductModel();
    product.title = title;
    product.price =price;
    product.stock = stock;
    product.description = description;

    const result = await this.productRepository.create(product);
    return result;
  }
}


