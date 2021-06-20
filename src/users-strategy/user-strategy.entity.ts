import {
  Column,
  Entity,
  JoinColumn, ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from '../users/user.entity';
import { Strategy } from '../strategy/strategy.entity';

@Entity()
export class UsersStrategy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  percentage: number;

  @ManyToOne(() => User)
  @JoinColumn()
  user: string;

  @ManyToOne(() => Strategy)
  @JoinColumn()
  strategy: string;
}
