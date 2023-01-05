import { PartialType } from '@nestjs/mapped-types';
import { CreateParkingAreaDto } from './create-parking-area.dto';

export class UpdateParkingAreaDto extends PartialType(CreateParkingAreaDto) {}
