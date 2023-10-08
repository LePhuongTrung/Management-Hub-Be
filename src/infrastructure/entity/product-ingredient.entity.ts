import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Ingredient } from '@entity/ingredient.entity';
import { Product } from '@entity/product.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';

@Entity('product_ingredients')
export class ProductIngredient extends TimestampedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_id', type: 'int' })
  productId: number;

  @Column({ name: 'ingredient_id', type: 'int' })
  ingredientId: number;

  @Column({ type: 'varchar' })
  volume: string;

  @ManyToOne(() => Product, (product) => product.productIngredients)
  @JoinColumn({ name: 'product_id' })
  products: Product;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.productIngredients)
  @JoinColumn({ name: 'ingredient_id' })
  ingredients: Ingredient;
}
