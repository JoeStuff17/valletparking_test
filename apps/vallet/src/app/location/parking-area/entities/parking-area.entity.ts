import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ParkingAreaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parkingLocationId: number;

  @Column()
  parkingAreaName: string;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
