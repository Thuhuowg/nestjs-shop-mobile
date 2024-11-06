import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor (
        private userService: UserService,
        private jwtService : JwtService
    ) {}
    async SignIn (email: string, password: string){
        const user = await this.userService.getUserByEmail(email);
        // const check =user.password;
        const userId =user.id;
        const userRole=user.role
        const check = await bcrypt.compare(password, user.password)       
        if(!user || !check ){
            return false
            // throw new BadRequestException({ message: 'Thong tin dang nhap khong chinh xac' })
            
        }
        const payload={sub: userId, name: user.username,role: userRole};
        return {
            access_token : await this.jwtService.signAsync(payload)
        }
}
}