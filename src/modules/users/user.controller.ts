import { Controller, Get, HttpCode,Request, HttpException, HttpStatus, UseGuards, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from "../auths/auth.guard";
import { CreateUserDto } from "src/dto/createUserDto";

@Controller('user')
export class UserController {
    constructor (
        private readonly userService: UserService
    ) {}

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        // Giả sử thông tin người dùng đã được giải mã và lưu trong req.user
        return req.user; // Trả về thông tin người dùng
    }
    @HttpCode(HttpStatus.OK)
    @Get('')
    async getListCustomer() {
        try {
            return await this.userService.getListCustomer()
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Khong tim thay rider nao',
            }, HttpStatus.NOT_FOUND, {
                cause: error
            });
        }
    }

    @HttpCode(HttpStatus.OK)
    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto){
      createUserDto['userService'] = this.userService;
        try {
          
             const user=await this.userService.createUser(createUserDto)
             return {message:"Tao nguoi dung thanh cong",user}
             
            
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Yeu cau khong tot',
              }, HttpStatus.BAD_REQUEST, {
                cause: error
              });
        }
    }
    
}