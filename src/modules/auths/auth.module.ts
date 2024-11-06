import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/models/User.entity";
import { UserModule } from "../users/user.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { AuthController } from "./auth.controller";

@Module({
    imports:[
        TypeOrmModule.forFeature([User]), 
        UserModule,
        JwtModule.register({
            global: true,
            secret: 'access-token',
            signOptions: {expiresIn: '1d'}
        }),
    ],
    providers: [AuthService, AuthGuard],
    controllers: [AuthController]
})
export class AuthModule {}