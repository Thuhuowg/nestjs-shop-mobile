import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "src/dto/loginDto";

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signInDto:LoginDto){
        try {
            const token= await this.authService.SignIn(signInDto.email,signInDto.password)
            return {message: "dang nhap thanh cong",token}
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `thong tin dang nhap khong chinh xac`,
              }, HttpStatus.NOT_FOUND, {
                cause: error
              });
        }
        
    }
}