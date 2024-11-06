import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/models/Product.entity";
import { ProductController } from "./Product.controller";
import { ProductService } from "./Product.service";
import { ProductRepository } from "src/repositories/product.repository";
import { ProductInfo } from "src/models/Product-Info.entity";
import { Camera } from "src/models/Camera.entity";
import { Feature } from "src/models/Feature";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";

@Module({
    imports:[
        MulterModule.register({
            dest:'./uploads',
            storage: diskStorage({
              destination: './uploads',
              filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
              },
            })
          })
        ,TypeOrmModule.forFeature([Product,ProductInfo, Camera, Feature])],
    controllers: [ProductController],
    providers: [ProductService, ProductRepository]
})
export class ProductModule {};