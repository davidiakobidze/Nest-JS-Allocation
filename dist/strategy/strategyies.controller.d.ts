import { StrategyiesService } from './strategyies.service';
export declare class StrategyiesController {
    private tasksService;
    private logger;
    constructor(tasksService: StrategyiesService);
    getTasks(): Promise<void>;
}
