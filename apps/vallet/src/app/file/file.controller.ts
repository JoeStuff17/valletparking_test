import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileDto } from './dto/file.dto';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  create(@Body() createFileDto: FileDto) {
    return this.fileService.create(createFileDto);
  }

  @Get()
  findAll() {
    return this.fileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.remove(+id);
  }
}
