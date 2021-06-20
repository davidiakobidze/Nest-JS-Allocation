import { EntityRepository, Repository } from 'typeorm';
import { Instrument } from './instrument.entity';
import { CreateInstrumentDto } from './dto/create-user.dto';

@EntityRepository(Instrument)
export class InstrumentsRepository extends Repository<Instrument> {
  async getInstruments(): Promise<Instrument[]> {
    return this.find();
  }

  async createInstrument(
    createInstrumentDto: CreateInstrumentDto,
  ): Promise<Instrument> {
    const { name, isin, exchange } = createInstrumentDto;

    const instrument = this.create({
      name,
      isin,
      exchange,
    });

    await this.save(instrument);
    return instrument;
  }

  async removeInstrument(id: string) {
    return this.delete(id);
  }
}
