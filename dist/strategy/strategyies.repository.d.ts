import { Repository } from 'typeorm';
import { User } from './strategy.entity';
export declare class StrategyiesRepository extends Repository<User> {
    private logger;
    getTasks(): Promise<void>;
}
