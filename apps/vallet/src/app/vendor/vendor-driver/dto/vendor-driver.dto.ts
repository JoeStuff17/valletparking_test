import { IsString } from "@nestjs/class-validator";
import { IsBoolean, IsEnum, IsNumber } from "@nestjs/class-validator/types/decorator/decorators";
import { DriverType } from "../entities/vendor-driver.entity";

export class VendorDriverDto {

    @IsNumber()
    locationId: number;

    @IsNumber()
    vendorId: number;

    @IsString()
    fullName: string;

    @IsString()
    gender: string;

    @IsNumber()
    phoneNo: number;

    @IsNumber()
    otp: number;

    @IsNumber()
    aadharNo: number;

    @IsString()
    licenceNo: string;

    @IsString()
    fullAddress: string;

    @IsNumber()
    pinCode: number;

    @IsString()
    panCardNo: string;

    @IsBoolean()
    diverLoginStatus: boolean;

    @IsBoolean()
    isActive: boolean;

    @IsEnum(DriverType)
    readonly driverType: DriverType;
}
