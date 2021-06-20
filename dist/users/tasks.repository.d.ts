import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class TasksRepository extends Repository<User> {
    private logger;
    getTasks(): Promise<void>;
}
