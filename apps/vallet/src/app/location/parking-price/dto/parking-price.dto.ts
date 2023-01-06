import { IsBoolean, IsNumber } from '@nestjs/class-validator';
export class ParkingPriceDto {

    @IsNumber()
    parkingAreaId: number;

    @IsNumber()
    startingHourRange: number;

    @IsNumber()
    endHourRange: number;

    @IsNumber()
    price: number;

    @IsBoolean()
    isActive: boolean;
}
