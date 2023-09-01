import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

import { Category } from '@entity/category.entity';
import { CustomerOrderProducts } from '@entity/customerOrderProduct.entity';
import { ProductIngredient } from '@entity/productIngredient.entity';
import { ProductPromotion } from '@entity/productPromotion.entity';
import { ProductReview } from '@entity/productReview.entity';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'category_id', type: 'int' })
  @Index()
  categoryId: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ name: 'image_url', type: 'varchar' })
  imageUrl: string;

  @Column({ name: 'product_description', nullable: true, type: 'varchar' })
  productDescription?: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(
    () => ProductIngredient,
    (productIngredient) => productIngredient.products,
  )
  productIngredients: ProductIngredient[];

  @OneToMany(
    () => CustomerOrderProducts,
    (customerOrderProduct) => customerOrderProduct.products,
  )
  customerOrderProducts: CustomerOrderProducts[];

  @OneToMany(() => ProductReview, (review) => review.products)
  reviews: ProductReview[];

  @OneToMany(() => ProductPromotion, (promotion) => promotion.products)
  promotions: ProductPromotion[];
}
