import { VendorUserEntity } from './../../vendor-user/entities/vendor-user.entity';
import { ParkingLocationEntity } from './../../../location/parking-locations/entities/parking-location.entity';
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FileEntity } from '../../../file/entities/file.entity';

export enum DriverType {
  LEAD = 'Lead',
  DRIVER = 'Driver',
}

@Entity({ name: 'drivers' })
export class VendorDriverEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: DriverType,
    default: DriverType.DRIVER,
  })
  driverType: DriverType;

  @OneToOne(
    (type) => ParkingLocationEntity,
    (location: ParkingLocationEntity) => location.id
  )
  locationId: ParkingLocationEntity;

  @OneToOne(
    (type) => VendorUserEntity,
    (vendorUser: VendorUserEntity) => vendorUser.id
  )
  vendorUserId: VendorUserEntity;

  @Column()
  fullName: string;

  @Column()
  gender: string;

  @Column({ type: 'bigint' })
  phoneNo: number;

  @Column()
  otp: number;

  @Column({ type: 'bigint' })
  aadharNo: number;

  @OneToOne(() => FileEntity, (file: FileEntity) => file.id)
  @JoinColumn()
  aadharFront: FileEntity;

  @OneToOne(() => FileEntity, (file: FileEntity) => file.id)
  @JoinColumn()
  aadharBack: FileEntity;

  @Column()
  licenceNo: string;

  @OneToOne(() => FileEntity, (file: FileEntity) => file.id)
  @JoinColumn()
  licenceFrontImg: FileEntity;

  @OneToOne(() => FileEntity, (file: FileEntity) => file.id)
  @JoinColumn()
  licenceBackImg: FileEntity;

  @Column()
  fullAddress: string;

  @Column({ type: 'bigint' })
  pinCode: number;

  @OneToOne(() => FileEntity)
  @JoinColumn()
  profieImg: FileEntity;

  @Column()
  panCardNo: string;

  @OneToOne(() => FileEntity, (file: FileEntity) => file.id)
  @JoinColumn()
  panCardImg: FileEntity;

  @Column()
  diverLoginStatus: boolean;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
