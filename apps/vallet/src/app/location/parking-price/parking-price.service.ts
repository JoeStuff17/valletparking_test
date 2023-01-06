import { Injectable } from '@nestjs/common';
import { ParkingPriceDto } from './dto/parking-price.dto';

@Injectable()
export class ParkingPriceService {
  create(ParkingPriceDto: ParkingPriceDto) {
    return 'This action adds a new parkingPrice';
  }

 
}
