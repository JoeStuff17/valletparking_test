import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'files' })
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  displayName: string;

  @Column()
  bucketName: string;

  @Column()
  extension: string;

  @Column()
  mimeType: string;

  @Column()
  fileType: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  //Joins
  //   @ManyToOne()
  //   @JoinColumn()
}
