import { Item } from './interfaces/item.interface';
export declare class ItemsService {
    private readonly items;
    create(item: Item): void;
    findAll(): Item[];
}
