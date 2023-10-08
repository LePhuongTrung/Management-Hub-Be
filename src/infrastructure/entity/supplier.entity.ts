import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { PurchaseInvoice } from '@entity/purchase-invoices.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';

@Entity('suppliers')
export class Supplier extends TimestampedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ nullable: true, type: 'varchar' })
  description?: string;

  @OneToMany(
    () => PurchaseInvoice,
    (purchaseInvoice) => purchaseInvoice.suppliers,
  )
  purchaseInvoices: PurchaseInvoice[];
}
