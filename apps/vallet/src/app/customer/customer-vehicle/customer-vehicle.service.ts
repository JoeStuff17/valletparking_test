import { Injectable } from '@nestjs/common';
import { CreateCustomerVehicleDto } from './dto/create-customer-vehicle.dto';
import { UpdateCustomerVehicleDto } from './dto/update-customer-vehicle.dto';

@Injectable()
export class CustomerVehicleService {
  create(createCustomerVehicleDto: CreateCustomerVehicleDto) {
    return 'This action adds a new customerVehicle';
  }

  findAll() {
    return `This action returns all customerVehicle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerVehicle`;
  }

  update(id: number, updateCustomerVehicleDto: UpdateCustomerVehicleDto) {
    return `This action updates a #${id} customerVehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerVehicle`;
  }
}
