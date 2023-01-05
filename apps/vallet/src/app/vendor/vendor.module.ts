import { VendorsEntity } from './vendors/entities/vendors.entity';
import { VendorDriverService } from './vendor-driver/vendor-driver.service';
import { VendorsService } from './vendors/vendors.service';
import { VendorDriverController } from './vendor-driver/venvendor-driver.controller';
import { VendorUserController } from './vendor-user/vendor-user.controller';
import { VendorsController } from './vendors/vendors.controller';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorUserService } from './vendor-user/vendor-user.service';
import { VendorDriverEntity } from './vendor-driver/entities/vendor-driver.entity';
import { VendorUserEntity } from './vendor-user/entities/vendor-user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VendorsEntity,
      VendorDriverEntity,
      VendorUserEntity,
    ]),
  ],
  controllers: [
    VendorsController,
    VendorUserController,
    VendorDriverController,
  ],
  providers: [VendorsService, VendorUserService, VendorDriverService],
})
export class VendorModule {}
