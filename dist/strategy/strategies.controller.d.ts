import { StrategiesService } from './strategies.service';
import { CreateStrategyDto } from "./dto/create-strategy.dto";
import { Strategy } from "./strategy.entity";
export declare class StrategiesController {
    private strategyService;
    private logger;
    constructor(strategyService: StrategiesService);
    getTasks(): Promise<void>;
    createStrategy(createStrategyDto: CreateStrategyDto): Promise<Strategy>;
}
