import { IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";
import { Injectable } from "@nestjs/common";
import { Column } from "typeorm";

@Injectable()
export class createProductDetailDto {
    @IsNotEmpty()
    @IsString()
    product_info_code

    @IsNotEmpty()
    product_id

    @IsNotEmpty()
    capacity

    @IsNotEmpty()
    available_capacity

    @IsNotEmpty()
    color

    @IsNotEmpty()
    @IsNumber()
    price
}