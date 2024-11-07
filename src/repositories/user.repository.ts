import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterDto } from "src/dto/registerDto";
import { Customer } from "src/models/Customer.entity";
import { Staff } from "src/models/Staff.entity";
import { User } from "src/models/User.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepo {
    constructor (
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
        @InjectRepository(Staff)
        private readonly staffRepository: Repository<Staff>
    ) {}

    async getListCustomer () {
        const query = `
        select c.*, u.username from customers c 
    left join users u on u.id  = c.user_id 
        `
        return this.customerRepository.query(query)
    }
    async createUser(createUserDto : RegisterDto) : Promise<User | null> {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const user = this.userRepository.create({
            ...createUserDto,
            password: hashedPassword
        })
        return await this.userRepository.save(user)
    }
    async getUserByEmail ( email: string ) : Promise<User | null> {
        return this.userRepository.findOne({where: {email:email}})
    }
    
}