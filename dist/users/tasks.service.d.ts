import { TasksRepository } from './users.repository';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    getTasks(): Promise<void>;
}
