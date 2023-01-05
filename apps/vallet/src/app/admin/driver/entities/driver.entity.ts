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
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: DriverType,
    default: DriverType.DRIVER,
  })
  driverType: DriverType;

  @Column()
  locationId: number;

  @Column()
  vendorId: number;

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

  @OneToOne(() => FileEntity)
  @JoinColumn()
  aadharFront: FileEntity;

  @OneToOne(() => FileEntity)
  @JoinColumn()
  aadharBack: FileEntity;

  @Column()
  licenceNo: string;

  @OneToOne(() => FileEntity)
  @JoinColumn()
  licenceFrontImg: FileEntity;

  @OneToOne(() => FileEntity)
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

  @OneToOne(() => FileEntity)
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
