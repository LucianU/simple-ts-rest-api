import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  /*
  OneToMany,
  ManyToOne,
  */
} from 'typeorm';
//import { Station } from '../../stations/entities/station.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  /*
  @ManyToOne(() => Company, (parent) => parent.childCompanies, {
    nullable: true,
  })
  parentCompany: Company;

  @OneToMany(() => Company, (ownedCompany) => ownedCompany.parentCompany)
  childCompanies: Company[];

  @OneToMany(() => Station, (station) => station.company)
  stations: Station[];
  */
}
