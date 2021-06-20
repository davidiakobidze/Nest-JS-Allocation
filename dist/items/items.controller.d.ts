import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
export declare class ItemsController {
    private itemsService;
    constructor(itemsService: ItemsService);
    create(createItemDto: CreateItemDto): Promise<void>;
    findAll(): Promise<Item[]>;
}
