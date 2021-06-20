import { UsersService } from './users.service';
export declare class UsersController {
    private tasksService;
    private logger;
    constructor(tasksService: UsersService);
    getTasks(): Promise<void>;
}
