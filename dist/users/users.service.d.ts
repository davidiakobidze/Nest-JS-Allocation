import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UsersRepository);
    getTasks(): Promise<void>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
