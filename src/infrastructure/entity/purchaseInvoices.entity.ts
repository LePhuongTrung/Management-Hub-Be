import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Supplier } from '@entity/supplier.entity';
import { Inventory } from '@entity/inventories.entity';

@Entity('purchase_invoices')
export class PurchaseInvoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  supplierId: number;

  @Column({ type: 'timestamp' })
  invoiceDate: Date;

  @Column({ type: 'float' })
  totalAmount: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.purchaseInvoices)
  @JoinColumn({ name: 'product_id' })
  suppliers: Supplier;

  @OneToMany(() => Inventory, (inventory) => inventory.purchaseInvoice)
  inventories: Inventory[];
}
