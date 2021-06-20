import { UsersRepository } from './users.repository';
export declare class UsersService {
    private tasksRepository;
    constructor(tasksRepository: UsersRepository);
    getTasks(): Promise<void>;
}
