import { InstrumentsRepository } from './instruments.repository';
export declare class InstrumentsService {
    private tasksRepository;
    constructor(tasksRepository: InstrumentsRepository);
    getTasks(): Promise<void>;
}
