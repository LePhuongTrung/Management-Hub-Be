import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { ProductModel } from '@models/products.model';
import { IngredientModel } from '@models/ingredients.model';

@Entity('product_ingredients')
export class ProductIngredientModel {
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

  @ManyToOne(() => ProductModel, (product) => product.productIngredients)
  @JoinColumn({ name: 'product_id' })
  product: ProductModel;

  @ManyToOne(
    () => IngredientModel,
    (ingredient) => ingredient.productIngredients,
  )
  @JoinColumn({ name: 'ingredient_id' })
  ingredient: IngredientModel;
}
