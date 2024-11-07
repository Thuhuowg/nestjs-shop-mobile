import { Injectable } from "@nestjs/common";
import { CreateOrderByGuest } from "src/dto/CreateOrderByGuest";
import { OrderRepository } from "src/repositories/order.repository";
import { ProductRepository } from "src/repositories/product.repository";


@Injectable()
export class OrderService {
    constructor (
        private readonly orderRepository: OrderRepository,
        private readonly productInfoRepo:ProductRepository
    ){}
    
    async createOrder ( createorderDto: CreateOrderByGuest) {
        let product_info_code = createorderDto.product_info_code
        try {
            // const data_update = await this.productInfoRepo.update_quantity(product_info_code,createorderDto.product_quantity_order )
            return await this.orderRepository.createOrder(createorderDto)
        } catch (error) {
            console.log(error)
        }
    }

    async getOrder(order_code: string) {
        try {
            return this.orderRepository.getOrder(order_code)
        } catch (error) {
            console.log(error)
        }
    }
    
    
}