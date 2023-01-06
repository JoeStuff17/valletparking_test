import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DisputesService } from './disputes.service';
import { DisputeDto } from './dto/dispute.dto';

@Controller('disputes')
export class DisputesController {
  constructor(private readonly disputesService: DisputesService) {}

  @Post()
  create(@Body() createDisputeDto: DisputeDto) {
    return this.disputesService.create(createDisputeDto);
  }

  @Get()
  findAll() {
    return this.disputesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disputesService.findOne(+id);
  }

 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disputesService.remove(+id);
  }
}
