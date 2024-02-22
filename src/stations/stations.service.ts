import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Station } from './entities/station.entity';

@Injectable()
export class StationsService {
  constructor(
    @InjectRepository(Station)
    private stationsRepository: Repository<Station>,
  ) {}

  async create(createStationDto: CreateStationDto) {
    try {
      return await this.stationsRepository.save(createStationDto);
    } catch (err) {
      return err;
    }
  }
  findAll(): Promise<Station[]> {
    return this.stationsRepository.find({ relations: ['company'] });
  }

  findOne(id: number): Promise<Station | null> {
    return this.stationsRepository.findOneBy({ id });
  }

  async update(id: number, updateStationDto: UpdateStationDto) {
    try {
      const stationToUpdate = await this.stationsRepository.findOneBy({ id });
      if (!stationToUpdate) {
        return { success: false, message: 'Item not found' };
      }

      this.stationsRepository.merge(stationToUpdate, updateStationDto);

      const updatedStation =
        await this.stationsRepository.save(stationToUpdate);

      return { success: true, data: updatedStation };
    } catch (err) {
      return err;
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.stationsRepository.delete(id);
  }
}
