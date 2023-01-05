import { Module } from '@nestjs/common';
import { VendorModule } from './vendor/vendor.module';
import { CustomerModule } from './customer/customer.module';
import { FileModule } from './file/file.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModule } from './booking/booking.module';
import { LocationModule } from './location/location.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vallet_parking',
      entities: [],
      synchronize: true,
    }),
    VendorModule,
    CustomerModule,
    FileModule,
    BookingModule,
    LocationModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
