import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Inventory } from '@entity/inventories.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';

@Entity('inventory_adjustments')
export class InventoryAdjustment extends TimestampedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'inventory_id', type: 'int' })
  inventoryId: number;

  @Column({ name: 'adjusted_quantity', type: 'float' })
  adjustedQuantity: number;

  @Column({ type: 'varchar' })
  reason: string;

  @Column({ name: 'adjusted_at', type: 'timestamp' })
  adjustedAt: Date;

  @ManyToOne(() => Inventory)
  @JoinColumn({ name: 'inventory_id' })
  inventory: Inventory;
}
