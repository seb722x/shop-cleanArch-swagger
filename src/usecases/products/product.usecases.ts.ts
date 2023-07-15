
//import { IProductRepository, ProductRepository } from 'src/domain/repository/productRepository.interface';
//
//
//
//export class ProductUseCase extends ProductRepository implements IProductRepository {
//  
//  constructor(private readonly productRepository: IProductRepository) {
//    super();
//  }
//
//  async create(product: any) {
//    return await this.productRepository.create(product);
//  }
//
//  async findAll() {
//    return await this.productRepository.findAll();
//  }
//
//  async deleteAllProducts() {
//    return await this.productRepository.deleteAllProducts();
//  }
//}