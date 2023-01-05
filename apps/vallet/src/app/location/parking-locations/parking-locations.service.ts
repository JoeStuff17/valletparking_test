import { Injectable } from '@nestjs/common';
import { CreateParkingLocationDto } from './dto/create-parking-location.dto';
import { UpdateParkingLocationDto } from './dto/update-parking-location.dto';

@Injectable()
export class ParkingLocationsService {
  create(createParkingLocationDto: CreateParkingLocationDto) {
    return 'This action adds a new parkingLocation';
  }

  findAll() {
    return `This action returns all parkingLocations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingLocation`;
  }

  update(id: number, updateParkingLocationDto: UpdateParkingLocationDto) {
    return `This action updates a #${id} parkingLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingLocation`;
  }
}
