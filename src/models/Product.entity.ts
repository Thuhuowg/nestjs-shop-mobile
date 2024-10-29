import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'


@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    product_name:string;

    @Column()
    opera_system:string;

    @Column()
    cpu_chip:string;

    @Column()
    cpu_speed:string;

    @Column()
    gpu_chip: string;

    @Column()
    ram: string;

    @Column()
    contact: string;

    @Column()
    rear_cam_solution: string;

    @Column()
    rear_cam_film: string;

    @Column()
    rear_cam_feature: string;

    @Column()
    front_cam_solution: string;

    @Column()
    front_cam_feature: string;

    @Column()
    capture: string;

    @Column()
    screen_resolution: string;

    @Column()
    screen_width: string;

    @Column()
    max_light: string;

    @Column()
    touchscreen_glass: string;

    @Column()
    capacity_battery: string;

    @Column()
    type_battery: string;

    @Column()
    support_charge: string;

    @Column()
    advance_security: string;

    @Column()
    water_dust: string;

    @Column()
    record: string;

    @Column()
    mobile_network: string;

    @Column()
    sim: string;

    @Column()
    bluetooth: string;

    @Column()
    port_charge: string;

    @Column()
    jack: string;

    @Column()
    design: string;

    @Column()
    material: string;

    @Column()
    size: string;

    @Column()
    debut: string;

    @Column()
    brand: string;

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