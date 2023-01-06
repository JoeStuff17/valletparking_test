import { IsBoolean, IsNumber, IsString } from "@nestjs/class-validator";

export class CreateParkingLocationDto {

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
