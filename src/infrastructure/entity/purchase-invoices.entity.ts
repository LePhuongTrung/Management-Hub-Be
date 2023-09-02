import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Inventory } from '@entity/inventories.entity';
import { Supplier } from '@entity/supplier.entity';

@Entity('purchase_invoices')
export class PurchaseInvoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'supplier_id', type: 'int' })
  supplierId: number;

  @Column({ name: 'invoice_date', type: 'timestamp' })
  invoiceDate: Date;

  @Column({ name: 'total_amount', type: 'float' })
  totalAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => Supplier, (supplier) => supplier.purchaseInvoices)
  @JoinColumn({ name: 'product_id' })
  suppliers: Supplier;

  @OneToMany(() => Inventory, (inventory) => inventory.purchaseInvoice)
  inventories: Inventory[];
}
