import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

import { Product } from '@entity/product.entity';
import { Ingredient } from '@entity/ingredient.entity';

@Entity('product_ingredients')
export class ProductIngredient extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'product_id' })
  productId: number;

  @Column({ type: 'int', name: 'ingredient_id' })
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
