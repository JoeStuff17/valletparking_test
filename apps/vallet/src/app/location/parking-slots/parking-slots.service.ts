import { Injectable } from '@nestjs/common';
import { ParkingSlotDto } from './dto/parking-slot.dto';

@Injectable()
export class ParkingSlotsService {
  create(ParkingSlotDto: ParkingSlotDto) {
    return 'This action adds a new parkingSlot';
  }

  findAll() {
    return `This action returns all parkingSlots`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingSlot`;
  }

  update(id: number, ParkingSlotDto: ParkingSlotDto) {
    return `This action updates a #${id} parkingSlot`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingSlot`;
  }
}
