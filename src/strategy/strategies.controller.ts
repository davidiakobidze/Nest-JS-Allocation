import { Body, Controller, Get, Post } from '@nestjs/common';
import { StrategiesService } from './strategies.service';
import { Logger } from '@nestjs/common';
import { CreateStrategyDto } from './dto/create-strategy.dto';
import { Strategy } from './strategy.entity';

@Controller('strategy')
export class StrategiesController {
  private logger = new Logger('TasksController');

  constructor(private strategyService: StrategiesService) {}

  @Get()
  getTasks(): Promise<void> {
    return this.strategyService.getTasks();
  }

  @Post()
  createStrategy(
    @Body() createStrategyDto: CreateStrategyDto,
  ): Promise<Strategy> {
    return this.strategyService.createStrategy(createStrategyDto);
  }
}
