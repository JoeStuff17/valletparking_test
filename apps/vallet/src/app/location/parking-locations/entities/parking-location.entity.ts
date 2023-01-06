import { VendorUserEntity } from './../../../vendor/vendor-user/entities/vendor-user.entity';
import {
  Column,
  CreateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class ParkingLocationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    (type) => VendorUserEntity,
    (vendorUser: VendorUserEntity) => vendorUser.id
  )
  vendorUserId: VendorUserEntity;

  @Column()
  name: string;

  @Column()
  lat: number;

  @Column()
  long: number;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
