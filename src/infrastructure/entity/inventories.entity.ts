import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { IngredientUnitEnum } from '@enums/ingredient.enum';

import { Ingredient } from '@entity/ingredient.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { PurchaseInvoice } from '@entity/purchaseInvoices.entity';
import { InventoryAdjustment } from '@entity/inventoryAdjustment.entity';

@Entity('inventories')
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'ingredient_id' })
  ingredientId: number;

  @Column({ type: 'int', name: 'restaurant_id' })
  restaurantId: number;

  @Column({ type: 'int', name: 'purchase_invoice_id' })
  purchaseInvoiceId: number;

  // Price of ingredient when it was purchased
  @Column({
    type: 'float',
    name: 'price_in',
  })
  priceIn: number;

  @Column({ type: 'float', name: 'quantity_in' })
  quantityIn: number;

  @Column({ type: 'float' })
  quantity: number;

  @Column({
    type: 'enum',
    enum: IngredientUnitEnum,
				default: IngredientUnitEnum.GRAM,
  })
  unit: IngredientUnitEnum;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.inventories)
  @JoinColumn({ name: 'ingredient_id' })
  ingredient: Ingredient;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.inventories)
  @JoinColumn({ name: 'restaurant_id' })
  restaurants: Restaurant;

  @ManyToOne(
    () => PurchaseInvoice,
    (purchaseInvoice) => purchaseInvoice.inventories,
  )
  @JoinColumn({ name: 'purchase_invoice_id' })
  purchaseInvoice: PurchaseInvoice;

  @OneToMany(() => InventoryAdjustment, (adjustment) => adjustment.inventory)
  adjustments: InventoryAdjustment[];
}
