import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Inventory } from '@entity/inventories.entity';

@Entity('inventory_adjustments')
export class InventoryAdjustment {
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

  @ManyToOne(() => Inventory)
  @JoinColumn({ name: 'inventory_id' })
  inventory: Inventory;
}
