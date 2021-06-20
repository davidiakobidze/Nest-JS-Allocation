import { InstrumentsService } from './instruments.service';
export declare class InstrumentController {
    private tasksService;
    private logger;
    constructor(tasksService: InstrumentsService);
    getTasks(): Promise<void>;
}
