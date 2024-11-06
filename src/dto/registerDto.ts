import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    username

    @IsNotEmpty()
    @IsString()
    email

    @IsNotEmpty()
    password
}