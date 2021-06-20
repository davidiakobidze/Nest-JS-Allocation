import { UsersStrategyService } from './users-strategy.service';
import { AllocateDto } from "./dto/allocate.dto";
export declare class UsersStrategyController {
    private usersService;
    private logger;
    constructor(usersService: UsersStrategyService);
    getTasks(): Promise<void>;
    allocate(allocateDto: AllocateDto): Promise<any>;
}
