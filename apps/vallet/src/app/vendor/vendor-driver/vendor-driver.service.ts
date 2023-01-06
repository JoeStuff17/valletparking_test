import { Injectable } from '@nestjs/common';
import { VendorDriverDto } from './dto/vendor-driver.dto';

@Injectable()
export class VendorDriverService {
  create(vendorDriverDto: VendorDriverDto) {
    return 'This action adds a new driver';
  }

  findAll() {
    return `This action returns all driver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driver`;
  }



  remove(id: number) {
    return `This action removes a #${id} driver`;
  }
}
