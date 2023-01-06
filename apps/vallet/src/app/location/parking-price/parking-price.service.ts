import { Injectable } from '@nestjs/common';
import { CreateParkingPriceDto } from './dto/parking-price.dto';
import { UpdateParkingPriceDto } from './dto/update-parking-price.dto';

@Injectable()
export class ParkingPriceService {
  create(createParkingPriceDto: CreateParkingPriceDto) {
    return 'This action adds a new parkingPrice';
  }

 
}
