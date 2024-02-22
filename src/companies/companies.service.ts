import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    try {
      return await this.companiesRepository.save(createCompanyDto);
    } catch (err) {
      return err;
    }
  }

  findAll(): Promise<Company[]> {
    return this.companiesRepository.find({
      relations: ['parentCompany', 'stations'],
    });
  }

  findOne(id: number): Promise<Company | null> {
    return this.companiesRepository.findOneBy({ id });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    try {
      const companyToUpdate = await this.companiesRepository.findOneBy({ id })
      if (!companyToUpdate) {
        return { success: false, message: 'Item not found' };
      }

      this.companiesRepository.merge(companyToUpdate, updateCompanyDto);

      const updatedCompany =
        await this.companiesRepository.save(companyToUpdate);

      return { success: true, data: updatedCompany };
    } catch (err) {
      return err;
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.companiesRepository.delete(id);
  }
}
