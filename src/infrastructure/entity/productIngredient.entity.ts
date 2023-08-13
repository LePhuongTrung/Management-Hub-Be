import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Product } from '@entity/product.entity';
import { Ingredient } from '@entity/ingredient.entity';

@Entity('product_ingredients')
export class ProductIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  productId: number;

  @Column({ type: 'int' })
  ingredientId: number;

  @Column({ type: 'varchar' })
  volume: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Product, (product) => product.productIngredients)
  @JoinColumn({ name: 'product_id' })
  products: Product;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.productIngredients)
  @JoinColumn({ name: 'ingredient_id' })
  ingredients: Ingredient;
}
