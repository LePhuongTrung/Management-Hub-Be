import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Inventory } from '@entity/inventories.entity';
import { Supplier } from '@entity/supplier.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';

@Entity('purchase_invoices')
export class PurchaseInvoice extends TimestampedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'supplier_id', type: 'int' })
  supplierId: number;

  @Column({ name: 'invoice_date', type: 'timestamp' })
  invoiceDate: Date;

  @Column({ name: 'total_amount', type: 'float' })
  totalAmount: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.purchaseInvoices)
  @JoinColumn({ name: 'product_id' })
  suppliers: Supplier;

  @OneToMany(() => Inventory, (inventory) => inventory.purchaseInvoice)
  inventories: Inventory[];
}
