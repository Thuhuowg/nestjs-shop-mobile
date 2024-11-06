import { Injectable } from "@nestjs/common";
import { createProductDetailDto } from "src/dto/createProductDetailDto";
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
    async getProductById (product_id: number) {
        try {
            return await this.proRepository.getProductById(product_id)
        } catch (error) {
            console.log(error)
        }
    }
    async createProductDetail (createProductDetailDto: createProductDetailDto, imagePathsString: string, image_ava: string) {
        try {
            return await this.proRepository.createProductDetail(createProductDetailDto,imagePathsString, image_ava)
        } catch (error) {
            console.log(error)
        }
    }
    async getAttribute(type?: string) {
        try {
            return await this.proRepository.getAttribute(type)
        } catch (error) {
            console.log(error)
            
        }
    }
    async getProductList() {
        try {
            // const data = await this.proRepository.getListProducts()
            return await this.proRepository.getListProducts()
            
        } catch (error) {
            console.log(error)
        }
    }
    async getProductDetail (product_id: number) {
        try {
            return await this.proRepository.getProductDetail(product_id)
        } catch (error) {
            console.log(error)
        }
    }
    
}