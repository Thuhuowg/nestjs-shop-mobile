import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { v4 as uuidv4 } from 'uuid';


@Entity({name: 'cameras'})
export class Camera {
    @PrimaryGeneratedColumn('increment')
    camera_id: number;

    @Column()
    camera_parameters:string;
}