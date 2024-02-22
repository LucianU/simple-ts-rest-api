import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Station } from 'src/stations/entities/station.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, (parent: Company) => parent.childCompanies, {
    nullable: true,
  })
  parentCompany: Company;

  @OneToMany(() => Company, (company) => company.parentCompany)
  childCompanies: Company[];

  @OneToMany(() => Station, (station) => station.company)
  stations: Station[];
}
