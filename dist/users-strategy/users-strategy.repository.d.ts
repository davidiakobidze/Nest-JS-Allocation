import { Repository } from "typeorm";
import { UsersStrategy } from "./user-strategy.entity";
export declare class UsersStrategyRepository extends Repository<UsersStrategy> {
    private logger;
    getTasks(): Promise<void>;
    saveUserStrategy(userStrategy: {
        user: string;
        strategy: string;
        percentage: number;
    }): Promise<UsersStrategy>;
}
