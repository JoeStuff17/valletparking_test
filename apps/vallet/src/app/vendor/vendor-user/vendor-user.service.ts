import { Injectable } from '@nestjs/common';
import { VendorUserDto } from './dto/vendor-user.dto';

@Injectable()
export class VendorUserService {
  create (vendorUserDto: VendorUserDto) {
    return 'This action adds a new user';
  }
}
