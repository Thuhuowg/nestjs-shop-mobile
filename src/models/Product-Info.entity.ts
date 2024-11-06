import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { Product } from './Product.entity';


@Entity({name: 'products_info'})
export class ProductInfo {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    product_info_code:string;

    @Column()
    product_id:number;

    @Column()
    capacity:string;

    @Column()
    available_capacity: number;

    @Column()
    color:string;

    @Column()
    price: number;

    @Column()
    quantity: number
    
    @Column()
    product_image_avatar: string;

    @Column()
    product_images: string;

  
    

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