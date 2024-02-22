import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
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
    name: 'latitude',
    type: Number,
    required: false,
    description: 'Latitude of the location',
  })
  @ApiQuery({
    name: 'longitude',
    type: Number,
    required: false,
    description: 'Longitude of the location',
  })
  @ApiQuery({
    name: 'radius',
    type: Number,
    required: false,
    description: 'Radius for station filtering',
  })
  findAll(
    @Query('latitude') latitude?: number,
    @Query('longitude') longitude?: number,
    @Query('radius') radius?: number,
  ) {
    if (
      latitude !== undefined &&
      longitude !== undefined &&
      radius !== undefined
    ) {
      throw new HttpException('Not Implemented', HttpStatus.NOT_IMPLEMENTED);
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
