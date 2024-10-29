import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { v4 as uuidv4 } from 'uuid';


@Entity({name: 'categories'})
export class Category {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name_type:string;

    @Column()
    description:string;

    @Column()
    cate_image:string;

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