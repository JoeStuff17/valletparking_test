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
import { ParkingLocationDto } from './dto/parking-location.dto';


@Controller('parking-locations')
export class ParkingLocationsController {
  constructor(
    private readonly parkingLocationsService: ParkingLocationsService
  ) {}

  @Post()
  create(@Body() createParkingLocationDto: ParkingLocationDto) {
    return this.parkingLocationsService.create(createParkingLocationDto);
  }

 
}
