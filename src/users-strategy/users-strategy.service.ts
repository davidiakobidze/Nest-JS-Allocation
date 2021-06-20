import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsersStrategyRepository } from "./users-strategy.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { AllocateDto } from "./dto/allocate.dto";
import { UsersRepository } from "../users/users.repository";
import { UsersStrategy } from "./user-strategy.entity";

@Injectable()
export class UsersStrategyService {
  constructor(
    @InjectRepository(UsersStrategyRepository)
    private usersStrategyRepository: UsersStrategyRepository,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository
  ) {
  }

  getTasks(): Promise<void> {
    return this.usersStrategyRepository.getTasks();
  }

  async allocate(allocateDto: AllocateDto): Promise<UsersStrategy[]> {
    const { strategyPercentage, usersIds } = allocateDto;

    const sumStrategiesPercentage = strategyPercentage.reduce(
      (total, strategyPercentage) => {
        return total += strategyPercentage.percent;
      }, 0);

    const users = await this.usersRepository.findByIds(usersIds);
    const savedUserStrategies = [];

    users.forEach(user => {
      if (user.available < sumStrategiesPercentage) {
        throw new HttpException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: `User ${user.name} can't allocate amount of ${sumStrategiesPercentage}%`
        }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    });

    for (const user of users) {
      for (const sp of strategyPercentage) {


        const userStrategy = {
          user: user.id,
          strategy: sp.id,
          percentage: sp.percent
        };

        let savedUserStrategy = await this.usersStrategyRepository.saveUserStrategy(userStrategy);

        savedUserStrategies.push(savedUserStrategy);
      }
      let newAvailable = user.available - sumStrategiesPercentage;
      await this.usersRepository.updateAvailableById(user.id, newAvailable);
    }

    return savedUserStrategies;
  }
}
