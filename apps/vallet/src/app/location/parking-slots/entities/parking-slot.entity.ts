import { Column, PrimaryGeneratedColumn } from 'typeorm';
export enum SlotType {
  STAFF = 'Staff',
  HANDICAPPED = 'Handicapped',
  GOVERNMENTOFFICERS = 'Government Officers',
  OTHERS = 'Others',
}

export enum vechileType {
  CAR = 'Car',
  BIKE = 'Bike',
  OTHERS = 'Others',
}

export class ParkingSlotEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  areaId: number;

  @Column({
    type: 'enum',
    enum: SlotType,
    default: SlotType.OTHERS,
  })
  slotType: SlotType;

  @Column({
    type: 'enum',
    enum: vechileType,
    default: vechileType.OTHERS,
  })
  vechileType: vechileType;
}
