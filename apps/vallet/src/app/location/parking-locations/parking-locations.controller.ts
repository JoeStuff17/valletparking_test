import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParkingLocationsService } from './parking-locations.service';
import { CreateParkingLocationDto } from './dto/create-parking-location.dto';
import { UpdateParkingLocationDto } from './dto/update-parking-location.dto';

@Controller('parking-locations')
export class ParkingLocationsController {
  constructor(
    private readonly parkingLocationsService: ParkingLocationsService
  ) {}

  @Post()
  create(@Body() createParkingLocationDto: CreateParkingLocationDto) {
    return this.parkingLocationsService.create(createParkingLocationDto);
  }

  @Get()
  findAll() {
    return this.parkingLocationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingLocationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParkingLocationDto: UpdateParkingLocationDto
  ) {
    return this.parkingLocationsService.update(+id, updateParkingLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkingLocationsService.remove(+id);
  }
}
