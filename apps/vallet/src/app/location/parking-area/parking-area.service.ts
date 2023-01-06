import { Injectable } from '@nestjs/common';
import { ParkingAreaDto } from './dto/parking-area.dto';

@Injectable()
export class ParkingAreaService {
  create(ParkingAreaDto: ParkingAreaDto) {
    return 'This action adds a new parkingArea';
  }

  findAll() {
    return `This action returns all parkingArea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingArea`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingArea`;
  }
}
