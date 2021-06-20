import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    private logger;
    constructor(tasksService: TasksService);
    getTasks(): Promise<void>;
}
