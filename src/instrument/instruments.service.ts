import { Injectable } from '@nestjs/common';
import { InstrumentsRepository } from './instruments.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InstrumentsService {
  constructor(
    @InjectRepository(InstrumentsRepository)
    private tasksRepository: InstrumentsRepository,
  ) {}

  getTasks(): Promise<void> {
    return this.tasksRepository.getTasks();
  }
}
