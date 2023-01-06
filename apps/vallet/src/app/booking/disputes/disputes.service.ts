import { Injectable } from '@nestjs/common';
import { DisputeDto } from './dto/dispute.dto';

@Injectable()
export class DisputesService {
  create(createDisputeDto: DisputeDto) {
    return 'This action adds a new dispute';
  }

  findAll() {
    return `This action returns all disputes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dispute`;
  }

 

  remove(id: number) {
    return `This action removes a #${id} dispute`;
  }
}
