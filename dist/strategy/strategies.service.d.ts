import { StrategiesRepository } from "./strategies.repository";
import { CreateStrategyDto } from "./dto/create-strategy.dto";
import { Strategy } from "./strategy.entity";
export declare class StrategiesService {
    private tasksRepository;
    constructor(tasksRepository: StrategiesRepository);
    getTasks(): Promise<void>;
    createStrategy(createStrategyDto: CreateStrategyDto): Promise<Strategy>;
}
