import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersStrategyRepository } from './users-strategy.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AllocateDto, StrategyPercentageObject } from './dto/allocate.dto';
import { UsersRepository } from '../users/users.repository';
import { UsersStrategy } from './user-strategy.entity';
import { User } from '../users/user.entity';

@Injectable()
export class UsersStrategyService {
  constructor(
    @InjectRepository(UsersStrategyRepository)
    private usersStrategyRepository: UsersStrategyRepository,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  getAllocations(): Promise<UsersStrategy[]> {
    return this.usersStrategyRepository.getAllocations();
  }

  getSumStrategiesPercentage = (strategyPercentage) =>
    strategyPercentage.reduce((total, strategyPercentage) => {
      return (total += strategyPercentage.percent);
    }, 0);

  private validateUsersAmount(users: User[], sumStrategiesPercentage: number) {
    users.forEach((user) => {
      if (user.available < sumStrategiesPercentage) {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `User ${user.name} can't allocate amount of ${sumStrategiesPercentage}%`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    });
  }

  saveUserStrategies = async (
    users: User[],
    strategyPercentage: StrategyPercentageObject[],
    sumStrategiesPercentage,
  ) => {
    const savedUserStrategies = [];

    for (const user of users) {
      for (const sp of strategyPercentage) {
        const userStrategy = {
          user: user.id,
          strategy: sp.id,
          percentage: sp.percent,
        };

        const savedUserStrategy =
          await this.usersStrategyRepository.saveUserStrategy(userStrategy);

        savedUserStrategies.push(savedUserStrategy);
      }
      const newAvailable = user.available - sumStrategiesPercentage;
      await this.usersRepository.updateAvailableById(user.id, newAvailable);
    }

    return savedUserStrategies;
  };

  async allocate(allocateDto: AllocateDto): Promise<UsersStrategy[]> {
    const { strategyPercentage, usersIds } = allocateDto;

    const sumStrategiesPercentage =
      this.getSumStrategiesPercentage(strategyPercentage);

    const users = await this.usersRepository.findByIds(usersIds);

    this.validateUsersAmount(users, sumStrategiesPercentage);

    return await this.saveUserStrategies(
      users,
      strategyPercentage,
      sumStrategiesPercentage,
    );
  }
}
