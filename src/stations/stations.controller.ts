import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { StationsService } from './stations.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Controller('stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Post()
  create(@Body() createStationDto: CreateStationDto) {
    return this.stationsService.create(createStationDto);
  }

  @Get()
  @ApiQuery({
    name: 'company_id',
    type: Number,
    required: false,
    description: 'Company that owns the stations',
  })
  findAll(@Query('company_id') companyId?: number) {
    if (companyId) {
      return this.stationsService.getStationsByCompany(companyId);
    } else {
      return this.stationsService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStationDto: UpdateStationDto) {
    return this.stationsService.update(+id, updateStationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stationsService.remove(+id);
  }
}
