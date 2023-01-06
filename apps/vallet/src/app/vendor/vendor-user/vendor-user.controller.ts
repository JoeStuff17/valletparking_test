import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VendorUserService } from './vendor-user.service';
import { VendorUserDto } from './dto/vendor-user.dto';

@Controller('vendor-user')
export class VendorUserController {
  constructor(private readonly VendorUserService: VendorUserService) {}

  @Post()
  create(@Body() createUserDto: VendorUserDto) {
    return this.VendorUserService.create(createUserDto);
  }

 
}
