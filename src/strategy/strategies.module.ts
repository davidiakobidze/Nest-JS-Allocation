import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrategiesController } from './strategies.controller';
import { StrategiesRepository } from './strategies.repository';
import { StrategiesService } from './strategies.service';

@Module({
  imports: [TypeOrmModule.forFeature([StrategiesRepository])],
  controllers: [StrategiesController],
  providers: [StrategiesService],
})
export class StrategiesModule {}
