import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

import { v4 as uuidv4 } from 'uuid';

@Entity({name: 'shopping_cart_details'})
export class ShoppingCartDetail {
  @PrimaryGeneratedColumn('increment')
  id: number;

    @Column()
    shopping_cart_id: string=uuidv4;

    @Column()
    product_info_code: string;

    @Column()
    product_quantity_shopping_cart: number;

    @Column()
    cart_price: number;

    // @CreateDateColumn({
    //     type: 'timestamp',
    //     default: new Date()
    //   })
    //   created_at:Date;
    
    // @UpdateDateColumn({
    //     type: 'timestamp',
    //     default: new Date(),
    //   })
    //   updated_at:Date;
    
    // @Column()
    // deleted_at:Date
}