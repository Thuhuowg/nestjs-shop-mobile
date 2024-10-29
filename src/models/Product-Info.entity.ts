import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'


@Entity({name: 'products_info'})
export class ProductInfo {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    product_info_code:string;

    @Column()
    product_id:number;

    @Column()
    capacity:number;

    @Column()
    available_capacity: number;

    @Column()
    color:string;

    @Column()
    price: number;

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