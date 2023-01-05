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
import { CreateCustomerVehicleDto } from './dto/create-customer-vehicle.dto';
import { UpdateCustomerVehicleDto } from './dto/update-customer-vehicle.dto';

@Controller('customer-vehicle')
export class CustomerVehicleController {
  constructor(
    private readonly customerVehicleService: CustomerVehicleService
  ) {}

  @Post()
  create(@Body() createCustomerVehicleDto: CreateCustomerVehicleDto) {
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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerVehicleDto: UpdateCustomerVehicleDto
  ) {
    return this.customerVehicleService.update(+id, updateCustomerVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerVehicleService.remove(+id);
  }
}
