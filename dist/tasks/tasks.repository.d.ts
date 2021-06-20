import { Repository } from 'typeorm';
import { Task } from './task.entity';
export declare class TasksRepository extends Repository<Task> {
    private logger;
    getTasks(): Promise<void>;
}
