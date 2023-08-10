import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { IngredientModel } from '@models/ingredients.model';
import { RestaurantModel } from '@models/restaurants.model';
import { PurchaseInvoiceModel } from '@models/purchaseInvoices.model';
import { InventoryAdjustmentModel } from '@models/inventoryAdjustments.model';

@Entity('inventories')
export class InventoryModel {
  @PrimaryGeneratedColumn()
  inventoryId: number;

  @Column({ type: 'int' })
  ingredientId: number;

  @Column({ type: 'int' })
  restaurantId: number;

  @Column({ type: 'int' })
  purchaseInvoiceId: number;

  @Column({ type: 'float' })
  priceIn: number;

  @Column({ type: 'float' })
  quantityIn: number;

  @Column({ type: 'float' })
  quantity: number;

  @Column({ type: 'varchar' })
  unit: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => IngredientModel, (ingredient) => ingredient.inventories)
  @JoinColumn({ name: 'ingredient_id' })
  ingredient: IngredientModel;

  @ManyToOne(() => RestaurantModel, (restaurant) => restaurant.inventories)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantModel;

  @ManyToOne(
    () => PurchaseInvoiceModel,
    (purchaseInvoice) => purchaseInvoice.inventories,
  )
  @JoinColumn({ name: 'purchase_invoice_id' })
  purchaseInvoice: PurchaseInvoiceModel;

  @OneToMany(
    () => InventoryAdjustmentModel,
    (adjustment) => adjustment.inventory,
  )
  adjustments: InventoryAdjustmentModel[];
}
