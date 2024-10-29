import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

import { v4 as uuidv4 } from 'uuid';

@Entity({name: 'shopping_carts'})
export class ShoppingCart {
  @PrimaryGeneratedColumn('uuid')
  id: string=uuidv4();

    @Column()
    customer_id: string=uuidv4;

    @Column()
    product_info_code: string;

    @Column()
    product_quantity: number;

    @Column()
    shopping_cart_price: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: new Date()
      })
      created_at:Date;
    
    @UpdateDateColumn({
        type: 'timestamp',
        default: new Date(),
      })
      updated_at:Date;
    
    @Column()
    deleted_at:Date
}