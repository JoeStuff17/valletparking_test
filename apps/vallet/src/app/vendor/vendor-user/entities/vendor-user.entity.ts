import { VendorsEntity } from './../../vendors/entities/vendors.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FileEntity } from '../../../file/entities/file.entity';

@Entity()
export class VendorUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => VendorsEntity, (vendor: VendorsEntity) => vendor.id)
  vendorId: VendorsEntity;

  @Column()
  fullName: string;

  @Column({ type: 'bigint', unique: true })
  mobileNo: number;

  @Column()
  otp: number;

  @Column()
  email: string;

  @Column()
  city: number;

  @Column()
  pincode: number;

  @Column()
  panNO: string;

  @OneToOne(() => FileEntity, (file: FileEntity) => file.id)
  @JoinColumn()
  panImage: FileEntity;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
