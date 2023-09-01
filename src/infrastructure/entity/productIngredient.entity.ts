import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Ingredient } from '@entity/ingredient.entity';
import { Product } from '@entity/product.entity';

@Entity('product_ingredients')
export class ProductIngredient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_id', type: 'int' })
  productId: number;

  @Column({ name: 'ingredient_id', type: 'int' })
  ingredientId: number;

  @Column({ type: 'varchar' })
  volume: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => Product, (product) => product.productIngredients)
  @JoinColumn({ name: 'product_id' })
  products: Product;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.productIngredients)
  @JoinColumn({ name: 'ingredient_id' })
  ingredients: Ingredient;
}
