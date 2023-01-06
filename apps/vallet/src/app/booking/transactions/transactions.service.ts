import { Injectable } from '@nestjs/common';
import { TransactionDto } from './dto/transaction.dto';

@Injectable()
export class TransactionsService {
  create(TransactionDto: TransactionDto) {
    return 'This action adds a new transaction';
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }



  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
