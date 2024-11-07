import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createProductDetailDto } from "src/dto/createProductDetailDto";
import { createProductDto } from "src/dto/createProductDto";
import { Camera } from "src/models/Camera.entity";
import { Feature } from "src/models/Feature";
import { ProductInfo } from "src/models/Product-Info.entity";
import { Product } from "src/models/Product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepository {
    constructor(
        @InjectRepository(Product)
        private readonly productRepo: Repository<Product>,
        @InjectRepository(ProductInfo)
        private readonly productInfoRepo: Repository<ProductInfo>,
        @InjectRepository(Camera)
        private readonly cameraRepo: Repository<Camera>,
        @InjectRepository(Feature)
        private readonly featureRepo: Repository<Feature>
    ) { }
    async getAttribute(type?: string) {
        let query = ''
        if (type === 'camera') {
            query = `select * from cameras`
            const result = await this.cameraRepo.query(query)
            console.log('-----result====', result)
            return result
        } else if (type === 'feature') {
            query = `select * from special_features`
            return await this.featureRepo.query(query)
        }


    }
    async getProductById(product_id: number): Promise<Product | null> {
        return await this.productRepo.findOne({ where: { id: product_id } })
    }
    async createProduct(createProduct: createProductDto): Promise<Product | null> {
        if (!createProduct) return null
        const product = this.productRepo.create(createProduct);
        const pro_db = await this.productRepo.save(product)
        console.log('-----pro_db====', pro_db)
        return pro_db
    }
    // async saveAvatar (product_id: number,file_name: string) : Promise<Product|null> {

    // }
    async createProductDetail(createProductDetailDto: createProductDetailDto, images: string, image_ava: string): Promise<ProductInfo | null> {

        const product_detail = this.productInfoRepo.create({
            ...createProductDetailDto,
            product_images: images,
            product_image_avatar: image_ava
        })
        return await this.productInfoRepo.save(product_detail)
    }
    async getListProducts(search?: string) {
        let query = `
            SELECT 
    p.id AS product_id,
    p.product_name,
    c.name_type AS category,
    jsonb_agg(
        jsonb_build_object(
            'product_info_code', pi2.product_info_code,
            'capacity', pi2.capacity,
            'color', pi2.color,
            'product_price', pi2.price,
            'capacity_available', pi2.available_capacity ,
            'product_images', pi2.product_images,
            'product_image_avatar', pi2.product_image_avatar
        )
    ) AS product_detail
FROM 
    products p
LEFT JOIN 
    products_info pi2 ON pi2.product_id = p.id
LEFT JOIN 
    categories c ON c.id = p.category_id
GROUP BY 
    p.id, c.name_type;
        `
        if (search) {
            query += `WHERE LOWER(p.product_name) LIKE LOWER($1) OR LOWER(c.name_type) LIKE LOWER($1);`
            return await this.productRepo.query(query, [`%${search}%`])
        }
        return await this.productRepo.query(query)
    }
    async getProductDetail(product_id: number) {
        let query =
            `
        SELECT 
    p.id AS product_id,
    p.product_name,
    p.*,
    c.name_type AS category,
    jsonb_agg(
        jsonb_build_object(
            'product_info_code', pi2.product_info_code,
            'capacity', pi2.capacity,
            'color', pi2.color,
            'product_price', pi2.price,
            'capacity_available', pi2.available_capacity ,
            'quantity', pi2.quantity,
            'product_images', pi2.product_images,
            'product_image_avatar', pi2.product_image_avatar
        )
    ) AS product_detail
FROM 
    products p
LEFT JOIN 
    products_info pi2 ON pi2.product_id = p.id
LEFT JOIN 
    categories c ON c.id = p.category_id
    where p.id = ${product_id}
GROUP BY 
    p.id, c.name_type;
        `
        const data = await this.productRepo.query(query)
        // console.log('data',data)
        return data[0]
    }
    async update_quantity (product_info_code: string, update_quantity: number) {
        const pro = await this.productInfoRepo.findOne({where: {product_info_code: product_info_code}})
        if(!pro) {
            throw new Error('Product not found');
        }
        pro.quantity = pro.quantity - update_quantity
        console.log(pro.quantity)
        await this.productInfoRepo.update({ product_info_code: product_info_code }, { quantity: pro.quantity });
    }
}