import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsDto } from './dto/vendors.dto';


@Controller('vendor')
export class VendorsController {
  constructor(private readonly VendorsService: VendorsService) {}

  @Post()
  create(@Body() VendorsDto: VendorsDto) {
    return this.VendorsService.create(VendorsDto);
  }
}
