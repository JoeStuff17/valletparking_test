import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerVehicleService } from './customer-vehicle.service';
import { CustomerVehicleDto } from './dto/customer-vehicle.dto';

@Controller('customer-vehicle')
export class CustomerVehicleController {
  constructor(
    private readonly customerVehicleService: CustomerVehicleService
  ) {}

  @Post()
  create(@Body() createCustomerVehicleDto: CustomerVehicleDto) {
    return this.customerVehicleService.create(createCustomerVehicleDto);
  }

  @Get()
  findAll() {
    return this.customerVehicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerVehicleService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerVehicleService.remove(+id);
  }
}
