import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class ParkingLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vendorId: number;

  @Column()
  name: string;

  @Column()
  lat: string;

  @Column()
  long: string;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
