import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Instrument } from '../instrument/instrument.entity';

@Entity()
export class Strategy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  country: string;

  @ManyToMany(() => Instrument)
  @JoinTable()
  instrument: Instrument[];
}
