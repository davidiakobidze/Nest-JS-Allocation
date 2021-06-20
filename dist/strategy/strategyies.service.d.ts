import { StrategyiesRepository } from './strategyies.repository';
export declare class StrategyiesService {
    private tasksRepository;
    constructor(tasksRepository: StrategyiesRepository);
    getTasks(): Promise<void>;
}
