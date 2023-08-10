import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { InventoryModel } from '@models/inventories.model';

@Entity('inventory_adjustments')
export class InventoryAdjustmentModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  inventoryId: number;

  @Column({ type: 'float' })
  adjustedQuantity: number;

  @Column({ type: 'varchar' })
  reason: string;

  @Column({ type: 'timestamp' })
  adjustedAt: Date;

  @ManyToOne(() => InventoryModel)
  @JoinColumn({ name: 'inventory_id' })
  inventory: InventoryModel;
}
