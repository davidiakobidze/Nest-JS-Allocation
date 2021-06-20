import { Injectable } from "@nestjs/common";
import { StrategiesRepository } from "./strategies.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateStrategyDto } from "./dto/create-strategy.dto";
import { Strategy } from "./strategy.entity";

@Injectable()
export class StrategiesService {
  constructor(
    @InjectRepository(StrategiesRepository)
    private tasksRepository: StrategiesRepository
  ) {
  }

  getTasks(): Promise<void> {
    return this.tasksRepository.getTasks();
  }


  createStrategy(createStrategyDto: CreateStrategyDto): Promise<Strategy> {
    return this.tasksRepository.createStrategy(createStrategyDto);
  }

}
