import { IsBoolean, IsNumber, IsString } from "@nestjs/class-validator";

export class CustomerVehicleDto {

    @IsNumber()
    regVechileId: number;

    @IsNumber()
    vechileMasterId: number;
    
    @IsString()
    vechileType: string;

    @IsString()
    vechileNo: string;

    @IsString()
    modelNo: string;

    @IsBoolean()
    isActive: boolean;
}
