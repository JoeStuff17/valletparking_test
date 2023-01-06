import { Injectable } from '@nestjs/common';
import { FileDto } from './dto/file.dto';

@Injectable()
export class FileService {
  create(FileDto: FileDto) {
    return 'This action adds a new file';
  }

  findAll() {
    return `This action returns all file`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

 

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
