import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

import { ProductIngredient } from '@entity/productIngredient.entity';
import { Inventory } from '@entity/inventories.entity';

@Entity('ingredients')
export class Ingredient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true, name: 'ingredient_description' })
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
