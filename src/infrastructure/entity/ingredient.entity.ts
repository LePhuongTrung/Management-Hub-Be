import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { ProductIngredient } from '@entity/productIngredient.entity';
import { Inventory } from '@entity/inventories.entity';

@Entity('ingredients')
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
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
