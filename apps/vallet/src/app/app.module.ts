import { AppController } from './app.controller';
import { FileEntity } from './file/entities/file.entity';
import { Vendor } from './vendors/vendor/entities/vendor.entity';
import { Module } from '@nestjs/common';
import { VendorModule } from './vendors/vendor/vendor.module';
import { DriverModule } from './driver/driver.module';
import { CustomersModule } from './customers/customers.module';
import { FileModule } from './file/file.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vallet_parking',
      entities: [Vendor,FileEntity],
      synchronize: true,
    }),
    VendorModule,
    DriverModule,
    CustomersModule,
    FileModule,
    // AppModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
