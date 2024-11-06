import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginDto {

    @IsNotEmpty()
    @IsString()
    email

    @IsNotEmpty()
    password
}