import { Injectable } from '@nestjs/common';
import { CreateParkingSlotDto } from './dto/create-parking-slot.dto';
import { UpdateParkingSlotDto } from './dto/update-parking-slot.dto';

@Injectable()
export class ParkingSlotsService {
  create(createParkingSlotDto: CreateParkingSlotDto) {
    return 'This action adds a new parkingSlot';
  }

  findAll() {
    return `This action returns all parkingSlots`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingSlot`;
  }

  update(id: number, updateParkingSlotDto: UpdateParkingSlotDto) {
    return `This action updates a #${id} parkingSlot`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingSlot`;
  }
}
