import { ProductModel } from '../model/product.model';



export interface IProductRepository {
  create(product: ProductModel): Promise<ProductModel>;
  findAll(): Promise<ProductModel[]>;
  deleteAllProducts(): Promise<void>;
}




//export class ProductRepository {
//  
//  private id: string;
//  private title: string;
//  private price: number;
//  private description: string;
//  private stock: number;
//
//  constructor(id: string, title: string, price: number, description: string, stock: number) {
//    this.id = id;
//    this.title = title;
//    this.price = price;
//    this.description = description;
//    this.stock = stock;
//  }
//
//  // getters and setters (opcional)
//  public getId(): string {
//    return this.id;
//  }
//
//  public setId(id: string): void {
//    this.id = id;
//  }
//
//  public getTitle(): string {
//    return this.title;
//  }
//
//  public setTitle(title: string): void {
//    this.title = title;
//  }
//
//  public getPrice(): number {
//    return this.price;
//  }
//
//  public setPrice(price: number): void {
//    this.price = price;
//  }
//
//  public getDescription(): string {
//    return this.description;
//  }
//
//  public setDescription(description: string): void {
//    this.description = description;
//  }
//
//  public getStock(): number {
//    return this.stock;
//  }
//
//  public setStock(stock: number): void {
//    this.stock = stock;
//  }
//}