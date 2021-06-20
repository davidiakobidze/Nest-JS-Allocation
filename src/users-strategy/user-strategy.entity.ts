import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Strategy } from '../strategy/strategy.entity';

@Entity()
export class UsersStrategy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  percentage: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: string;

  @ManyToOne(() => Strategy, { onDelete: 'CASCADE' })
  @JoinColumn()
  strategy: string;
}
