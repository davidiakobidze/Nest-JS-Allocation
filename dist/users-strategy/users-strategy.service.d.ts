import { UsersStrategyRepository } from "./users-strategy.repository";
import { AllocateDto } from "./dto/allocate.dto";
import { UsersRepository } from "../users/users.repository";
import { UsersStrategy } from "./user-strategy.entity";
export declare class UsersStrategyService {
    private usersStrategyRepository;
    private usersRepository;
    constructor(usersStrategyRepository: UsersStrategyRepository, usersRepository: UsersRepository);
    getTasks(): Promise<void>;
    allocate(allocateDto: AllocateDto): Promise<UsersStrategy[]>;
}
