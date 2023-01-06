import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/vendors.dto';


@Injectable()
export class VendorsService {
  create(createVendorDto: CreateVendorDto) {
    return 'This action adds a new vendor';
  }

  
}
