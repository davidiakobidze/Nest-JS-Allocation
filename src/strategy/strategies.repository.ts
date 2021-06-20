import { EntityRepository, Repository } from 'typeorm';
import { Strategy } from './strategy.entity';
import { CreateStrategyDto } from './dto/create-strategy.dto';

@EntityRepository(Strategy)
export class StrategiesRepository extends Repository<Strategy> {
  async getStrategies(): Promise<Strategy[]> {
    return this.find();
  }

  async createStrategy(
    createStrategyDto: CreateStrategyDto,
  ): Promise<Strategy> {
    const { name, country } = createStrategyDto;

    const strategy = this.create({
      name,
      country,
    });

    await this.save(strategy);
    return strategy;
  }

  async removeStrategy(id: string) {
    return this.delete(id);
  }
}
