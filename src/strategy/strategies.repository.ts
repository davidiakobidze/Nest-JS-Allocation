import { EntityRepository, Repository } from "typeorm";
import { Strategy } from "./strategy.entity";
import { Logger } from "@nestjs/common";
import { CreateStrategyDto } from "./dto/create-strategy.dto";

@EntityRepository(Strategy)
export class StrategiesRepository extends Repository<Strategy> {
  private logger = new Logger("TasksRepository", true);

  async getTasks(): Promise<void> {
    this.logger.log("zddddddddddddddddddddddd");
  }

  async createStrategy(createStrategyDto: CreateStrategyDto): Promise<Strategy> {
    const { name, country } = createStrategyDto;

    const strategy = this.create({
      name,
      country
    });

    await this.save(strategy);
    return strategy;
  }
}
