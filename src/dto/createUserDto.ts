import { IsEmail, IsNotEmpty, IsString, MinLength } from "@nestjs/class-validator";
import { Injectable } from "@nestjs/common";


@Injectable()
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    username

    @IsNotEmpty()
    @IsEmail()
    email

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password



}