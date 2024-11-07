import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "src/models/Order.entity";
import { OrderDetail } from "src/models/Order-Detail.entity";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { OrderRepository } from "src/repositories/order.repository";
import { ProductRepository } from "src/repositories/product.repository";
import { ProductInfo } from "src/models/Product-Info.entity";
import { Product } from "src/models/Product.entity";
import { Camera } from "src/models/Camera.entity";
import { Feature } from "src/models/Feature";

@Module({
    imports:[
        TypeOrmModule.forFeature([Order, OrderDetail,ProductInfo,Product,Camera,Feature])],
    controllers: [OrderController],
    providers: [OrderService, OrderRepository, ProductRepository],
})
export class OrderModule {};