import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

import { v4 as uuidv4 } from 'uuid';

@Entity({name: 'customers'})
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string=uuidv4();

    @Column()
    customer_code: string;

    @Column()
    full_name: string;

    @Column()
    province: string;

    @Column()
    district: string;

    @Column()
    ward: string;

    @Column()
    email: string;

    @Column()
    phone_number:string;

    @Column()
    user_id: string =uuidv4

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