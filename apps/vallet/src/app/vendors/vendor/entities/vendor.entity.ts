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
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ type: 'bigint' })
  phoneNo: number;

  @Column()
  otp: number;

  @Column()
  email: string;

  @Column()
  city: number;

  @Column()
  state: number;

  @Column()
  distric: number;

  @Column()
  pincode: number;

  @Column({ type: 'bigint' })
  panNO: number;

  @OneToOne(() => FileEntity)
  @JoinColumn()
  panImage: FileEntity;

  @Column({ type: 'bigint' })
  gstNo: number;

  @OneToOne(() => FileEntity)
  @JoinColumn()
  gstDocument: FileEntity;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
