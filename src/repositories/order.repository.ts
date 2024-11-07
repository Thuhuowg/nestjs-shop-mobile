import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AddIntoCartDto } from "src/dto/addIntoCartDto";
import { CreateOrderByGuest } from "src/dto/CreateOrderByGuest";
import { OrderDetail } from "src/models/Order-Detail.entity";
import { Order } from "src/models/Order.entity";
import { ShoppingCartDetail } from "src/models/Shopping-Cart-Detail.entity";
import { ShoppingCart } from "src/models/Shopping-Cart.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderRepository {
    constructor (
        @InjectRepository(Order)
        private readonly OrderRepo: Repository<Order>,
        @InjectRepository(OrderDetail)
        private readonly OrderDetailRepo: Repository<ShoppingCartDetail>
    ) {}

   createOrder(createOrderDto: CreateOrderByGuest) {
    let order
    if (!createOrderDto.customer_id) {
        order= this.OrderRepo.create(createOrderDto) 
    }
    return this.OrderRepo.save(order)
   }

   async getOrder(order_code: string) {
let query = `
select o.*,pi2.*,p.product_name from orders o 
left join products_info pi2 on pi2.product_info_code  = o.product_info_code 
left join products p on p.id = pi2.product_id 
where o.order_code = '${order_code}'
`
const data= await this.OrderRepo.query(query)
console.log(data)
return data[0]

}

}