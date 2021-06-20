import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async getUsers(): Promise<User[]> {
    return this.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, surname, amount } = createUserDto;

    const user = this.create({
      name,
      surname,
      available: 100,
      amount,
    });

    await this.save(user);
    return user;
  }

  async updateAvailableById(id: string, newAvailable) {
    return this.update(id, {
      available: newAvailable,
    });
  }
}
