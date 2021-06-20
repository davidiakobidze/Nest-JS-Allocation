import { EntityRepository, Repository } from "typeorm";
import { UsersStrategy } from "./user-strategy.entity";
import { Logger } from "@nestjs/common";

@EntityRepository(UsersStrategy)
export class UsersStrategyRepository extends Repository<UsersStrategy> {

  private logger = new Logger("TasksRepository", true);


  async getTasks(): Promise<void> {

  }

  async saveUserStrategy(
    userStrategy: {
      user: string,
      strategy: string,
      percentage: number
    }): Promise<UsersStrategy> {

    return await this.save(this.create(userStrategy));
  }

}
