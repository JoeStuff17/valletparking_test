import { IsEnum, IsNumber } from "@nestjs/class-validator";
import { SlotType, vechileType } from "../entities/parking-slot.entity";

export class ParkingSlotDto {
    @IsNumber()
    areaId: number;

    @IsEnum(SlotType)
    readonly slotType: SlotType;

    @IsEnum(vechileType)
    readonly vechileType: vechileType;
}
