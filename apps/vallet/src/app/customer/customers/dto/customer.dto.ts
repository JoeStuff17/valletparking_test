import { IsBoolean, IsNumber, IsString } from "@nestjs/class-validator";

export class CreateCustomerDto {

    @IsString()
    fullName: string;

    @IsNumber()
    mobile: number;

    @IsNumber()
    otp: number;

    @IsBoolean()
    isActive: boolean;
}
