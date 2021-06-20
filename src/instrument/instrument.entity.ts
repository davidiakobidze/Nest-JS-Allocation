import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instrument {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  isin: string;

  @Column()
  exchange: string;
}
