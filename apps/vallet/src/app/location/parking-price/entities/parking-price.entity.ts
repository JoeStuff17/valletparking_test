import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class ParkingPriceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parkingAreaId: number;

  @Column({ type: 'bigint' })
  startingHourRange: number;

  @Column({ type: 'bigint' })
  endHourRange: number;

  @Column({ type: 'bigint' })
  price: number;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
