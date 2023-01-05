import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
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
    default: DriverType.DRIVER
  })
  driverType: DriverType

@Column()
locationId:number;

@Column()
vendorId:number;

@Column()
fullName:string;

@Column()

}
