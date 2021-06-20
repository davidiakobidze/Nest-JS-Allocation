import { Controller, Get } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { Logger } from '@nestjs/common';

@Controller('instruments')
export class InstrumentController {
  private logger = new Logger('InstrumentController');

  constructor(private tasksService: InstrumentsService) {}

  @Get()
  getTasks(): Promise<void> {
    return this.tasksService.getTasks();
  }
}
