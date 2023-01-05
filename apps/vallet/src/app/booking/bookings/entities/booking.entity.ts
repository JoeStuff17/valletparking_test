import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BookingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  pickupDriverId: number;

  @Column()
  deliveredDriverId: number;

  @Column()
  parkingSlotId: number;

  @Column({ type: 'bigint' })
  bookingStartingFrom: number;

  @Column({ type: 'bigint' })
  bookingEnd: number;

  @Column()
  preCustodyImgId: number;

  @Column()
  postCustodyImgId: number;

  @Column()
  pickupRequestStatus: boolean;

  @Column()
  disputeId: number;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
