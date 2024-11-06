import { IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AddIntoCartDto {
    @IsNotEmpty()
    @IsString()
    product_info_code

    @IsNotEmpty()
    @IsString()
    product_quantity_shopping_cart

    @IsNotEmpty()
    @IsNumber()
    cart_price
}