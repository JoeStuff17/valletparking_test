import { IsBoolean, IsNumber, IsString } from "@nestjs/class-validator";

export class ParkingLocationDto {

    @IsNumber()
    vendorId: number;

    @IsString()
    name: string;

    @IsNumber()
    lat: number;

    @IsNumber()
    long: number;

    @IsBoolean()
    isActive: boolean;
}
