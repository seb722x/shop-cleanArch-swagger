
//product.controller.ts
import { Controller, Get, Post, Body,  Delete, Inject } from '@nestjs/common';



import { CreateProductDto } from 'src/infrastructure/dto/create-product.dto';
//import { UsecasesInstanceModule } from 'src/infrastructure/usecases-conection/usecases-Instance.module';
import { UsecaseInstance } from 'src/infrastructure/usecases-conection/usecasesInstance';
import { findAllUseCases } from 'src/usecases/products/findAllProduct.usecases';
import { deleteProductUsecases } from 'src/usecases/products/deleteAllProducts.usecases';
import { CreateProductUseCases } from 'src/usecases/products/createProduct.usecases';
import { CREATE_PRODUCT_INSTANCE, DELETE_ALL_PRODUCTS_INSTANCE, FIND_ALL_PRODUCTS_INSTANCE } from 'src/infrastructure/usecases-conection/usecases.provider';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from 'src/infrastructure/entities/product.entity';


@ApiTags('products')
@Controller('products')
export class ProductsController {
    @Inject(FIND_ALL_PRODUCTS_INSTANCE)
    private readonly finAllInstance: UsecaseInstance<findAllUseCases>
    @Inject(DELETE_ALL_PRODUCTS_INSTANCE)
    private readonly deletAllInstance: UsecaseInstance<deleteProductUsecases>
    @Inject(CREATE_PRODUCT_INSTANCE)
    private readonly createOneInstance: UsecaseInstance<CreateProductUseCases>

  @Post()
  @ApiResponse({status: 201, description: 'poduct was created', type: Product})
  @ApiResponse({status: 400, description: 'Bad request'})
  async createOne(@Body() createProductDto: CreateProductDto) {//
    const {price,title,stock,description } = createProductDto;
    const productCreated = await this.createOneInstance.getInstance().execute(title, price, description, stock);
    return createProductDto;
  }

  @ApiResponse({status: 201, description: 'poduct was found', type: Product})
  @ApiResponse({status: 400, description: 'Bad request'})
  @Get()    
  async findAll() {
      const products = await this.finAllInstance.getInstance().execute();
      return products
  }


  @ApiResponse({status: 201, description: 'poduct was eliminated', type: Product})
  @ApiResponse({status: 400, description: 'Bad request'})
  @Delete('delete')
  async removeAll() {
    console.log(await this.finAllInstance.getInstance().execute())
    await this.deletAllInstance.getInstance().execute();
    return 'Deleted';
  }
}
