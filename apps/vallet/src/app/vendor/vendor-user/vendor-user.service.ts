import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/vendor-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class VendorUserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
