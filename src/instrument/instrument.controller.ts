import { Body, Controller, Get, Post } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { Instrument } from './instrument.entity';
import { CreateInstrumentDto } from './dto/create-user.dto';

@Controller('instruments')
export class InstrumentController {
  constructor(private instrumentService: InstrumentsService) {}

  @Get()
  getInstruments(): Promise<Instrument[]> {
    return this.instrumentService.getInstruments();
  }

  @Post()
  createInstrument(
    @Body() createInstrumentDto: CreateInstrumentDto,
  ): Promise<Instrument> {
    return this.instrumentService.createInstrument(createInstrumentDto);
  }
}
