import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Inventory } from '@entity/inventories.entity';
import { ProductIngredient } from '@entity/product-ingredient.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';

@Entity('ingredients')
export class Ingredient extends TimestampedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'ingredient_description', nullable: true, type: 'varchar' })
  ingredientDescription?: string;

  @OneToMany(
    () => ProductIngredient,
    (productIngredient) => productIngredient.ingredients,
  )
  productIngredients: ProductIngredient[];

  @OneToMany(() => Inventory, (inventory) => inventory.ingredient)
  inventories: Inventory[];
}
