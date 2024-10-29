import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { v4 as uuidv4 } from 'uuid';


@Entity({name: 'orders'})
export class Order {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    order_code:string;

    @Column()
    customer_id:string=uuidv4;

    @Column()
    product_quantity_order:number;

    @Column()
    product_info_code:string;

    @Column()
    order_status: string;

    @Column()
    order_price: number;

    @Column()
    order_date: Date;

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