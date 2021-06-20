import { Body, Controller, Get, Post } from '@nestjs/common';
import { StrategiesService } from './strategies.service';
import { CreateStrategyDto } from './dto/create-strategy.dto';
import { Strategy } from './strategy.entity';

@Controller('strategy')
export class StrategiesController {
  constructor(private strategyService: StrategiesService) {}

  @Get()
  getStrategies(): Promise<Strategy[]> {
    return this.strategyService.getStrategies();
  }

  @Post()
  createStrategy(
    @Body() createStrategyDto: CreateStrategyDto,
  ): Promise<Strategy> {
    return this.strategyService.createStrategy(createStrategyDto);
  }
}
