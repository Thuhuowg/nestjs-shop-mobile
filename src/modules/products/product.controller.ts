import { Controller, HttpCode, HttpException, HttpStatus, Post } from "@nestjs/common";
import { ProductService } from "./Product.service";
import { createProductDto } from "src/dto/createProductDto";

@Controller('products')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @HttpCode(HttpStatus.OK)
    @Post('')
    async createProduct(createProductDto: createProductDto) {
        try {
            console.log('kkkkk')
            return await this.productService.createProduct(createProductDto)
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Khong tim thay rider nao',
            }, HttpStatus.NOT_FOUND, {
                cause: error
            });
        }
    }
}