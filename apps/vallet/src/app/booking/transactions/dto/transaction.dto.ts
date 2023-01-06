import { IsNumber, IsString } from "@nestjs/class-validator";

export class CreateTransactionDto {

    @IsNumber()
    bookingId: number;

    @IsNumber()
    transactionId: number;

    @IsString()
    paymentMode: string;

    @IsNumber()
    amount: number;

    @IsString()
    paymentStatus: string;

    @IsNumber()
    paymentTimeStamp: number;
}
