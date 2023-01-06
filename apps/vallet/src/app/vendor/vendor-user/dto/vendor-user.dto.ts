import { IsBoolean, IsNumber, IsString } from "@nestjs/class-validator";

export class CreateUserDto {

    @IsNumber()
    vendorId: number;

    @IsString()
    fullName: string;

    @IsNumber()
    mobileNo: number;

    @IsNumber()
    otp: number;

    @IsString()
    email: string;

    @IsNumber()
    city: number;

    @IsNumber()
    pincode: number;

    @IsString()
    panNO: string;

    @IsBoolean()
    isActive: boolean;
}
