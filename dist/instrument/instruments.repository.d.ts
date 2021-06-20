import { Repository } from 'typeorm';
import { Instrument } from './instrument.entity';
export declare class InstrumentsRepository extends Repository<Instrument> {
    private logger;
    getTasks(): Promise<void>;
}
