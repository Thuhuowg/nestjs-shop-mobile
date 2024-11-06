import { Injectable } from "@nestjs/common";
import { UserRepo } from "src/repositories/user.repository";

@Injectable()
export class UserService {
    constructor (
        private readonly UserRepo: UserRepo
    ) {}
    async getListCustomer () {
        try {
            return await this.UserRepo.getListCustomer()
        } catch (error) {
            console.log(error)
        }
    }
    async getUserByEmail (email: string) {
        try {
            return await this.UserRepo.getUserByEmail(email)
        } catch (error) {
            console.log(error)
        }
    }
}