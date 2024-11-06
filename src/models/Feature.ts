import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { v4 as uuidv4 } from 'uuid';


@Entity({name: 'special_features'})
export class Feature {
    @PrimaryGeneratedColumn('increment')
    special_feature_id: number;

    @Column()
    features_name:string;
}