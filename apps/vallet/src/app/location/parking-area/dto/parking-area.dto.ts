import { IsBoolean, IsNumber, IsString } from '@nestjs/class-validator';
export class CreateParkingAreaDto {

    @IsNumber()
    parkingLocationId: number;

    @IsString()
    parkingAreaName: string;

    @IsBoolean()
    isActive: boolean;
}
