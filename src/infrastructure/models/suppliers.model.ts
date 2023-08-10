import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('suppliers')
export class SupplierModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;
}
