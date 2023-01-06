import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Entity,
} from 'typeorm';
import { FileEntity } from '../../../file/entities/file.entity';

@Entity({ name: 'vendors' })
export class VendorsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ type: 'bigint', unique: true })
  phoneNo: number;

  @Column()
  otp: number;

  @Column({ unique: true })
  email: string;

  @Column()
  city: number;

  @Column()
  pincode: number;

  @Column({ unique: true })
  panNO: string;

  @OneToOne((type) => FileEntity, (file: FileEntity) => file.id)
  @JoinColumn()
  panImage: FileEntity;

  @Column({ unique: true })
  gstNo: string;

  @OneToOne(() => FileEntity, (file: FileEntity) => file.id)
  @JoinColumn()
  gstDocument: FileEntity;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
