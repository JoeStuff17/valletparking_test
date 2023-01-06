import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingDto } from './dto/booking.dto';


@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

 

  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

}
