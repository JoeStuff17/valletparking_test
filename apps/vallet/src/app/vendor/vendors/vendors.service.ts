import { Injectable } from '@nestjs/common';
import { VendorsDto } from './dto/vendors.dto';


@Injectable()
export class VendorsService {
  create(VendorsDto: VendorsDto) {
    return 'This action adds a new vendor';
  }

  
}
