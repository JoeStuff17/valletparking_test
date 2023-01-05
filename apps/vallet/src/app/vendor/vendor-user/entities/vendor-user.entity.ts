import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FileEntity } from '../../../file/entities/file.entity';

@Entity()
export class VendorUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vendorId: number;

  @Column()
  fullName: string;

  @Column({ type: 'bigint' })
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

  @OneToOne(() => FileEntity)
  @JoinColumn()
  panImage: FileEntity;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
