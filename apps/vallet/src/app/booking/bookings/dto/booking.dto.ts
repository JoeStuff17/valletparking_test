import { IsBoolean, IsInt, IsNumber } from "@nestjs/class-validator";

export class BookingDto {

    @IsInt()
    customerId: number;

    @IsInt()
    pickupDriverId: number;

    @IsInt()
    deliveredDriverId: number;

    @IsInt()
    parkingSlotId: number;

    @IsNumber()
    bookingStartingFrom: number;

    @IsNumber()
    bookingEnd: number;

    @IsNumber()
    preCustodyImgId: number;

    @IsNumber()
    postCustodyImgId: number;

    @IsBoolean()
    pickupRequestStatus: boolean;

    @IsNumber()
    disputeId: number;

    @IsBoolean()
    isActive: boolean;
}
