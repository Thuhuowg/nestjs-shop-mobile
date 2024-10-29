import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { v4 as uuidv4 } from 'uuid';


@Entity({name: 'orders_details'})
export class OrderDetail {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    order_code:string;

    @Column()
    product_code:string;

    @Column()
    product_quantity_order:number;

    @Column()
    product_info_code:string;

    @Column()
    order_price: number;
    
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