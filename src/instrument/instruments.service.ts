import { Injectable } from '@nestjs/common';
import { InstrumentsRepository } from './instruments.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Instrument } from './instrument.entity';
import { CreateInstrumentDto } from './dto/create-user.dto';

@Injectable()
export class InstrumentsService {
  constructor(
    @InjectRepository(InstrumentsRepository)
    private instrumentsRepository: InstrumentsRepository,
  ) {}

  getInstruments(): Promise<Instrument[]> {
    return this.instrumentsRepository.getInstruments();
  }

  createInstrument(
    createInstrumentDto: CreateInstrumentDto,
  ): Promise<Instrument> {
    return this.instrumentsRepository.createInstrument(createInstrumentDto);
  }
}
