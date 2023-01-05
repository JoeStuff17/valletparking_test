import { Injectable } from '@nestjs/common';
import { CreateParkingAreaDto } from './dto/create-parking-area.dto';
import { UpdateParkingAreaDto } from './dto/update-parking-area.dto';

@Injectable()
export class ParkingAreaService {
  create(createParkingAreaDto: CreateParkingAreaDto) {
    return 'This action adds a new parkingArea';
  }

  findAll() {
    return `This action returns all parkingArea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingArea`;
  }

  update(id: number, updateParkingAreaDto: UpdateParkingAreaDto) {
    return `This action updates a #${id} parkingArea`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingArea`;
  }
}
