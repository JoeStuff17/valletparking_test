import { IsBoolean, IsNumber, IsString } from '@nestjs/class-validator';
export class ParkingAreaDto {

    @IsNumber()
    parkingLocationId: number;

    @IsString()
    parkingAreaName: string;

    @IsBoolean()
    isActive: boolean;
}
