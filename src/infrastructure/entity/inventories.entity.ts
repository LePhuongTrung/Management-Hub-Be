import { BadRequestException } from '@nestjs/common';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from 'typeorm';

import { Ingredient } from '@entity/ingredient.entity';
import { InventoryAdjustment } from '@entity/inventory-adjustment.entity';
import { PurchaseInvoice } from '@entity/purchase-invoices.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';
import { IngredientUnitEnum } from '@enums/ingredient.enum';
import { BadRequestMessages } from '@enums/message.enum';

@Entity('inventories')
export class Inventory extends TimestampedEntity {
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
    type: 'int',
  })
  unit: number;

  @BeforeInsert()
  @BeforeUpdate()
  @AfterLoad()
  validateUnit(): void {
    if (!Object.values(IngredientUnitEnum).includes(this.unit)) {
      throw new BadRequestException(BadRequestMessages.INVALID_ACCRUAL_RATE);
    }
  }

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
