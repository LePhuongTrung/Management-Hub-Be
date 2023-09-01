import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

import { Inventory } from '@entity/inventories.entity';
import { ProductIngredient } from '@entity/productIngredient.entity';

@Entity('ingredients')
export class Ingredient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'ingredient_description', nullable: true, type: 'varchar' })
  ingredientDescription?: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(
    () => ProductIngredient,
    (productIngredient) => productIngredient.ingredients,
  )
  productIngredients: ProductIngredient[];

  @OneToMany(() => Inventory, (inventory) => inventory.ingredient)
  inventories: Inventory[];
}
