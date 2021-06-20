import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UsersRepository extends Repository<User> {
    private logger;
    getTasks(): Promise<void>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateAvailableById(id: string, newAvailable: any): Promise<import("typeorm").UpdateResult>;
}
