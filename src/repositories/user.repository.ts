import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "src/models/Customer.entity";
import { User } from "src/models/User.entity";

@Injectable()
export class UserRepo {
    constructor (
        @InjectRepository(User)
        private readonly UserRepository: UserRepo
        // @InjectRepository(Customer)
    ) {}


}