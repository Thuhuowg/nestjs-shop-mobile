import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'


@Entity({name: 'invoices'})
export class Invoice {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    order_code:string;

    @Column()
    invoice_date:Date;

    @Column()
    invoice_price:number;

    @Column()
    invoicing_staff:number;

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