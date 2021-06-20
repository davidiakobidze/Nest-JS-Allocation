import { Instrument } from '../instrument/instrument.entity';
export declare class Strategy {
    id: string;
    name: string;
    country: string;
    instrument: Instrument[];
}
