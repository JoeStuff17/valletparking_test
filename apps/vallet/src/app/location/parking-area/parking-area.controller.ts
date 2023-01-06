import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParkingAreaService } from './parking-area.service';
import { CreateParkingAreaDto } from './dto/parking-area.dto';

@Controller('parking-area')
export class ParkingAreaController {
  constructor(private readonly parkingAreaService: ParkingAreaService) {}

  @Post()
  create(@Body() createParkingAreaDto: CreateParkingAreaDto) {
    return this.parkingAreaService.create(createParkingAreaDto);
  }

  @Get()
  findAll() {
    return this.parkingAreaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingAreaService.findOne(+id);
  }

  
}
