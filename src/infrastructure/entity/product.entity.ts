import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Category } from '@entity/category.entity';
import { CustomerOrderProducts } from '@entity/customer-order-product.entity';
import { ProductIngredient } from '@entity/product-ingredient.entity';
import { ProductPromotion } from '@entity/product-promotion.entity';
import { ProductReview } from '@entity/product-review.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';

@Entity('products')
export class Product extends TimestampedEntity {
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
