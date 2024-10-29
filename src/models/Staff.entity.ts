import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

import { v4 as uuidv4 } from 'uuid';

@Entity({name: 'staffs'})
export class Staff {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    staff_code: string;

    @Column()
    birthday: Date;

    @Column()
    phone_number:string;

    @Column()
    address: string

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