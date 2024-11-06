import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/models/User.entity";
import { UserRepo } from "src/repositories/user.repository";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { Customer } from "src/models/Customer.entity";
import { Staff } from "src/models/Staff.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User,Customer, Staff])],
    controllers: [UserController],
    providers: [UserRepo, UserService],
    exports:[UserService]
})
export class UserModule {}