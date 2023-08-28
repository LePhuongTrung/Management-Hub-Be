import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

import { Inventory } from '@entity/inventories.entity';
import { Supplier } from '@entity/supplier.entity';

@Entity('purchase_invoices')
export class PurchaseInvoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'supplier_id' })
  supplierId: number;

  @Column({ type: 'timestamp', name: 'invoice_date' })
  invoiceDate: Date;

  @Column({ type: 'float', name: 'total_amount' })
  totalAmount: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.purchaseInvoices)
  @JoinColumn({ name: 'product_id' })
  suppliers: Supplier;

  @OneToMany(() => Inventory, (inventory) => inventory.purchaseInvoice)
  inventories: Inventory[];
}
