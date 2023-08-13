import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { PurchaseInvoice } from '@entity/purchaseInvoices.entity';

@Entity('suppliers')
export class Supplier {
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

  @OneToMany(
    () => PurchaseInvoice,
    (purchaseInvoice) => purchaseInvoice.suppliers,
  )
  purchaseInvoices: PurchaseInvoice[];
}