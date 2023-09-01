import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Ingredient } from '@entity/ingredient.entity';
import { InventoryAdjustment } from '@entity/inventoryAdjustment.entity';
import { PurchaseInvoice } from '@entity/purchaseInvoices.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { IngredientUnitEnum } from '@enums/ingredient.enum';

@Entity('inventories')
export class Inventory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ingredient_id', type: 'int' })
  ingredientId: number;

  @Column({ name: 'restaurant_id', type: 'int' })
  restaurantId: number;

  @Column({ name: 'purchase_invoice_id', type: 'int' })
  purchaseInvoiceId: number;

  // Price of ingredient when it was purchased
  @Column({
    name: 'price_in',
    type: 'float',
  })
  priceIn: number;

  @Column({ name: 'quantity_in', type: 'float' })
  quantityIn: number;

  @Column({ type: 'float' })
  quantity: number;

  @Column({
    default: IngredientUnitEnum.GRAM,
    enum: IngredientUnitEnum,
    type: 'enum',
  })
  unit: IngredientUnitEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

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
