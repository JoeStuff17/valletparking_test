import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CustomerVehicleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  regVechileId: number;

  @Column()
  vechileMasterId: number;

  @Column()
  vechileType: string;

  @Column()
  vechileNo: string;

  @Column()
  modelNo: string;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
