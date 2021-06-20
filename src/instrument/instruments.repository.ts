import { EntityRepository, Repository } from 'typeorm';
import { Instrument } from './instrument.entity';
import { Logger } from '@nestjs/common';

@EntityRepository(Instrument)
export class InstrumentsRepository extends Repository<Instrument> {
  private logger = new Logger('TasksRepository', true);

  async getTasks(): Promise<void> {
    this.logger.log('zddddddddddddddddddddddd');
  }
}
