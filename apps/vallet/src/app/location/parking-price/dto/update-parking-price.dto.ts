import { PartialType } from '@nestjs/mapped-types';
import { CreateParkingPriceDto } from './create-parking-price.dto';

export class UpdateParkingPriceDto extends PartialType(CreateParkingPriceDto) {}
