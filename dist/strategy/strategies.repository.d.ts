import { Repository } from "typeorm";
import { Strategy } from "./strategy.entity";
import { CreateStrategyDto } from "./dto/create-strategy.dto";
export declare class StrategiesRepository extends Repository<Strategy> {
    private logger;
    getTasks(): Promise<void>;
    createStrategy(createStrategyDto: CreateStrategyDto): Promise<Strategy>;
}
