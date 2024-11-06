import { Controller, Get, HttpCode, HttpException, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor (
        private readonly userService: UserService
    ) {}

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
    
}