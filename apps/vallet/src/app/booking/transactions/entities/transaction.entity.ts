import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  bookingId: number;

  @Column({ type: 'bigint' })
  transactionId: number;

  @Column()
  paymentMode: string;

  @Column({ type: 'bigint' })
  amount: number;

  @Column()
  paymentStatus: string;

  @Column({ type: 'bigint' })
  paymentTimeStamp: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
