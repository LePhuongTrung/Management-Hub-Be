import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { ProductIngredientModel } from '@models/productIngredients.model';
import { InventoryModel } from '@models/inventories.model';

@Entity('ingredients')
export class IngredientModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  ingredientDescription?: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(
    () => ProductIngredientModel,
    (productIngredient) => productIngredient.ingredient,
  )
  productIngredients: ProductIngredientModel[];

  @OneToMany(() => InventoryModel, (inventory) => inventory.ingredient)
  inventories: InventoryModel[];
}
