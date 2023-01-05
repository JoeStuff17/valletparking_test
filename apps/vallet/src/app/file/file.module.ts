import { FileEntity } from './entities/file.entity';
import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity]), FileModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
