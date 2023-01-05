import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VendorDriverService } from './vendor-driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class VendorDriverController {
  constructor(private readonly VendorDriverService: VendorDriverService) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.VendorDriverService.create(createDriverDto);
  }

}
