import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { SupplierModel } from '@models/suppliers.model';
import { InventoryModel } from '@models/inventories.model';

@Entity('purchase_invoices')
export class PurchaseInvoiceModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  supplierId: number;

  @Column({ type: 'timestamp' })
  invoiceDate: Date;

  @Column({ type: 'float' })
  totalAmount: number;

  @ManyToOne(() => SupplierModel)
  @JoinColumn({ name: 'supplier_id' })
  supplier: SupplierModel;

  @OneToMany(() => InventoryModel, (inventory) => inventory.purchaseInvoice)
  inventories: InventoryModel[];
}
