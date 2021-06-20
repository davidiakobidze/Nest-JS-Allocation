import { EntityRepository, Repository } from 'typeorm';
import { UsersStrategy } from './user-strategy.entity';

@EntityRepository(UsersStrategy)
export class UsersStrategyRepository extends Repository<UsersStrategy> {
  async getAllocations(): Promise<UsersStrategy[]> {
    return this.find();
  }

  async saveUserStrategy(userStrategy: {
    user: string;
    strategy: string;
    percentage: number;
  }): Promise<UsersStrategy> {
    return await this.save(this.create(userStrategy));
  }

  async removeUserStrategy(id: string) {
    return this.delete(id);
  }
}
