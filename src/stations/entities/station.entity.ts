import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'numeric', precision: 10, scale: 7 })
  latitude: number;

  @Column({ type: 'numeric', precision: 10, scale: 7 })
  longitude: number;

  @Column()
  address: string;
}
