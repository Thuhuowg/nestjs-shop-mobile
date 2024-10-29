import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createProductDetailDto } from "src/dto/createProductDetailDto";
import { createProductDto } from "src/dto/createProductDto";
import { ProductInfo } from "src/models/Product-Info.entity";
import { Product } from "src/models/Product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepository {
    constructor(
        @InjectRepository(Product)
        private readonly productRepo: Repository<Product>,
        @InjectRepository(ProductInfo)
        private readonly productInfoRepo: Repository<ProductInfo>
    ) { }
    async createProduct(createProduct: createProductDto): Promise<Product | null> {
        const product = await this.productRepo.create(createProduct);
        return await this.productRepo.save(product)
    }
    async createProductDetail(createProductDetailDto: createProductDetailDto): Promise<ProductInfo | null> {
        const product_detail = await this.productInfoRepo.create(createProductDetailDto)
        return await this.productInfoRepo.save(product_detail)
    }
    async getListProducts(search?: string) {
        let query = `
            select p.*, pi2.product_info_code, pi2.capacity, pi2.color, pi2.price as product_price , c.name_type from products p 
            left join products_info pi2 on pi2.product_id = p.id
            left join categories c on c.id = p.category_id 
        `
        if (search) {
            query += `WHERE LOWER(p.product_name) LIKE LOWER($1) OR LOWER(c.name_type) LIKE LOWER($1);`
            return await this.productRepo.query(query, [`%${search}%`])
        }
        return await this.productRepo.query(query)
    }
    async getProductDetail ( product_info_code: string) {
        let query = 
        `
        select p.*, pi2.product_info_code, pi2.capacity, pi2.color, pi2.price as product_price , c.name_type from products p 
        left join products_info pi2 on pi2.product_id = p.id
        left join categories c on c.id = p.category_id 
        where pi2.product_info_code = ${product_info_code};
        `
        return this.productRepo.query(query)
    }
}