import { IsString } from "@nestjs/class-validator";
import { IsBoolean, IsNumber } from "@nestjs/class-validator/types/decorator/decorators";

export class CreateVendorDto {
    
    @IsString()
    fullName: string;

    @IsNumber()
    phoneNo: number;

    @IsNumber()
    otp: number;
    
    @IsString()
    email: string;

    @IsString()
    city: string;

    @IsNumber()
    pincode: number;

    @IsString()
    panNO: string;

    @IsString()
    gstNo: string;

    @IsBoolean()
    isActive: boolean;
}
