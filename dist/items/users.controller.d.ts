import { CreateItemDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private itemsService;
    constructor(itemsService: UsersService);
    create(createItemDto: CreateItemDto): Promise<void>;
    findAll(): Promise<User[]>;
}
