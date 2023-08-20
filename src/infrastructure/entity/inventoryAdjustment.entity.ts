import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

import { Inventory } from '@entity/inventories.entity';

@Entity('inventory_adjustments')
export class InventoryAdjustment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'inventory_id' })
  inventoryId: number;

  @Column({ type: 'float', name: 'adjusted_quantity' })
  adjustedQuantity: number;

  @Column({ type: 'varchar' })
  reason: string;

  @Column({ type: 'timestamp', name: 'adjusted_at' })
  adjustedAt: Date;

  @ManyToOne(() => Inventory)
  @JoinColumn({ name: 'inventory_id' })
  inventory: Inventory;
}
