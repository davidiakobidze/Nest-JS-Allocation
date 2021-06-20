import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  private logger = new Logger('TasksRepository', true);

  async getTasks(): Promise<void> {
    this.logger.log('zddddddddddddddddddddddd');
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
