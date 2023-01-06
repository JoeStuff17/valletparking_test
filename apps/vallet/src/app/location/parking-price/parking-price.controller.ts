import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParkingPriceService } from './parking-price.service';
import { CreateParkingPriceDto } from './dto/parking-price.dto';


@Controller('parking-price')
export class ParkingPriceController {
  constructor(private readonly parkingPriceService: ParkingPriceService) {}

  @Post()
  create(@Body() createParkingPriceDto: CreateParkingPriceDto) {
    return this.parkingPriceService.create(createParkingPriceDto);
  }
}
