import { TasksService } from './users.service';
export declare class TasksController {
    private tasksService;
    private logger;
    constructor(tasksService: TasksService);
    getTasks(): Promise<void>;
}
