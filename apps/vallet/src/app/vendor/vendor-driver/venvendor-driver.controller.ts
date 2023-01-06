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
import { VendorDriverDto } from './dto/vendor-driver.dto';

@Controller('driver')
export class VendorDriverController {
  constructor(private readonly VendorDriverService: VendorDriverService) {}

  @Post()
  create(@Body() vendorDriverDto: VendorDriverDto) {
    return this.VendorDriverService.create(vendorDriverDto);
  }

}
