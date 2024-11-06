import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AddIntoCartDto } from "src/dto/addIntoCartDto";
import { ShoppingCartDetail } from "src/models/Shopping-Cart-Detail.entity";
import { ShoppingCart } from "src/models/Shopping-Cart.entity";
import { Repository } from "typeorm";

@Injectable()
export class CartRepository {
    constructor (
        @InjectRepository(ShoppingCart)
        private readonly shoppingCartRepo: Repository<ShoppingCart>,
        @InjectRepository(ShoppingCartDetail)
        private readonly shoppingCartDetailRepo: Repository<ShoppingCartDetail>
    ) {}

    async addtoCart ( addintoCart : AddIntoCartDto): Promise<ShoppingCart|null> 
    {
        const cart = await this.shoppingCartRepo.create(addintoCart)
        return await this.shoppingCartRepo.save(cart)
    }

    async

}