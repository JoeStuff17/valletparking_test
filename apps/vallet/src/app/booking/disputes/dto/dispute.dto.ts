import { IsBoolean, IsNumber, IsString } from "@nestjs/class-validator";

export class DisputeDto {

    @IsString()
    remarks: string;

    @IsNumber()
    status: number;

    @IsBoolean()
    isActive: boolean;
}
