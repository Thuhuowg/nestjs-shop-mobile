import { Injectable } from "@nestjs/common";
import { createProductDto } from "src/dto/createProductDto";
import { ProductRepository } from "src/repositories/product.repository";

@Injectable()
export class ProductService {
    constructor (
        private readonly proRepository: ProductRepository
    ){}
    
    async createProduct (createProductDto: createProductDto) {
        try {
            return await this.proRepository.createProduct(createProductDto)
        } catch (error) {
            console.log(error)
        }
    }
}