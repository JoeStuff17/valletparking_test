import { Injectable } from '@nestjs/common';
import { CustomerVehicleDto } from './dto/customer-vehicle.dto';

@Injectable()
export class CustomerVehicleService {
  create(createCustomerVehicleDto: CustomerVehicleDto) {
    return 'This action adds a new customerVehicle';
  }

  findAll() {
    return `This action returns all customerVehicle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerVehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerVehicle`;
  }
}
