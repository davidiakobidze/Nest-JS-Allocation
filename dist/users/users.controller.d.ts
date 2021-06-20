import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
export declare class UsersController {
    private usersService;
    private logger;
    constructor(usersService: UsersService);
    getTasks(): Promise<void>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
