import { Injectable } from '@nestjs/common';
import { StrategiesRepository } from './strategies.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStrategyDto } from './dto/create-strategy.dto';
import { Strategy } from './strategy.entity';

@Injectable()
export class StrategiesService {
  constructor(
    @InjectRepository(StrategiesRepository)
    private strategyRepository: StrategiesRepository,
  ) {}

  getStrategies(): Promise<Strategy[]> {
    return this.strategyRepository.getStrategies();
  }

  createStrategy(createStrategyDto: CreateStrategyDto): Promise<Strategy> {
    return this.strategyRepository.createStrategy(createStrategyDto);
  }
}
