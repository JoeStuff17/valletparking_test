import { Vendor } from './entities/vendor.entity';
import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor]), VendorModule],
  controllers: [VendorController],
  providers: [VendorService],
})
export class VendorModule {}
