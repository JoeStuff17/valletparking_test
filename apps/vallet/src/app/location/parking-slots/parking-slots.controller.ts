import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParkingSlotsService } from './parking-slots.service';
import { ParkingSlotDto } from './dto/parking-slot.dto';

@Controller('parking-slots')
export class ParkingSlotsController {
  constructor(private readonly parkingSlotsService: ParkingSlotsService) {}

  @Post()
  create(@Body() ParkingSlotDto: ParkingSlotDto) {
    return this.parkingSlotsService.create(ParkingSlotDto);
  }

  @Get()
  findAll() {
    return this.parkingSlotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingSlotsService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkingSlotsService.remove(+id);
  }
}
