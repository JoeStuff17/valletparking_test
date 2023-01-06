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
import { CreateParkingLocationDto } from './dto/parking-location.dto';


@Controller('parking-locations')
export class ParkingLocationsController {
  constructor(
    private readonly parkingLocationsService: ParkingLocationsService
  ) {}

  @Post()
  create(@Body() createParkingLocationDto: CreateParkingLocationDto) {
    return this.parkingLocationsService.create(createParkingLocationDto);
  }

 
}
