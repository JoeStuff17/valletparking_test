import { Injectable } from '@nestjs/common';
import { ParkingLocationDto } from './dto/parking-location.dto';

@Injectable()
export class ParkingLocationsService {
  create(ParkingLocationDto: ParkingLocationDto) {
    return 'This action adds a new parkingLocation';
  }

  findAll() {
    return `This action returns all parkingLocations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingLocation`;
  }
}
