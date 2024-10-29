import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/models/Product.entity";
import { ProductController } from "./Product.controller";
import { ProductService } from "./Product.service";
import { ProductRepository } from "src/repositories/product.repository";

@Module({
    imports:[TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService, ProductRepository]
})
export class ProductModule {};