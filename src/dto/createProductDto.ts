import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { Injectable } from "@nestjs/common";

@Injectable()
export class createProductDto {
    @IsNotEmpty()
    @IsString()
    product_name;

    @IsNotEmpty()
    @IsString()
    opera_system

    @IsNotEmpty()
    @IsString()
    cpu_chip

    @IsNotEmpty()
    @IsString()
    cpu_speed

    @IsNotEmpty()
    @IsString()
    gpu_chip

    @IsNotEmpty()
    @IsString()
    ram

    @IsNotEmpty()
    @IsString()
    contact

    @IsNotEmpty()
    @IsString()
    rear_cam_solution

    @IsNotEmpty()
    @IsString()
    rear_cam_film

    @IsNotEmpty()
    @IsString()
    rear_cam_feature

    @IsNotEmpty()
    @IsString()
    front_cam_solution

    @IsNotEmpty()
    @IsString()
    front_cam_feature

    @IsNotEmpty()
    @IsString()
    capture

    @IsNotEmpty()
    @IsString()
    screen_resolution

    @IsNotEmpty()
    @IsString()
    screen_width

    @IsNotEmpty()
    @IsString()
    max_light

    @IsNotEmpty()
    @IsString()
    touchscreen_glass

    @IsNotEmpty()
    @IsString()
    capacity_battery

    @IsNotEmpty()
    @IsString()
    type_battery

    @IsString()
    support_charge

    @IsString()
    advance_security

    @IsNotEmpty()
    @IsString()
    water_dust

    @IsNotEmpty()
    @IsString()
    record

    @IsNotEmpty()
    @IsString()
    mobile_network

    @IsNotEmpty()
    @IsString()
    sim

    @IsNotEmpty()
    @IsString()
    bluetooth

    @IsNotEmpty()
    @IsString()
    port_charge

    @IsNotEmpty()
    @IsString()
    jack

    @IsNotEmpty()
    @IsString()
    design

    @IsNotEmpty()
    @IsString()
    material

    @IsNotEmpty()
    @IsString()
    size

    @IsNotEmpty()
    @IsString()
    debut

    @IsNotEmpty()
    @IsString()
    brand

    @IsNotEmpty()
    @IsString()
    product_image_avatar

    @IsNotEmpty()
    @IsString()
    product_images
}