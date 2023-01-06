import { IsBoolean, IsNumber, IsString } from "@nestjs/class-validator";

export class CreateDisputeDto {

    @IsString()
    remarks: string;

    @IsNumber()
    status: number;

    @IsBoolean()
    isActive: boolean;
}
