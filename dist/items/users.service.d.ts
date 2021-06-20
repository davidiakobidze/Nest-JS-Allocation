import { User } from './interfaces/user.interface';
export declare class UsersService {
    private readonly items;
    create(user: User): void;
    findAll(): User[];
}
