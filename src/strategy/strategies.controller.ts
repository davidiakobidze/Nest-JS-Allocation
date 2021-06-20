import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.strategyService.remove(id);
  }
}
