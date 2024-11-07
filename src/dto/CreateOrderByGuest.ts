import { IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateOrderByGuest {
    @IsNotEmpty()
    @IsString()
    order_code

    @IsString()
    customer_id

    @IsNotEmpty()
    @IsString()
    product_info_code

    @IsNotEmpty()
    @IsNumber()
    product_quantity_order

    @IsNotEmpty()
    order_date

    @IsNotEmpty()
    order_price
}