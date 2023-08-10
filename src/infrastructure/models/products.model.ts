import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { CategoryModel } from '@models/categories.model';
import { ProductIngredientModel } from '@models/productIngredients.model';
import { CustomerOrderProductsModel } from '@models/customerOrderProducts.model';
import { ProductReviewModel } from '@models/productReviews.model';
import { ProductImageModel } from '@models/productImages.model';
import { ProductPromotionModel } from '@models/productPromotions.model';


@Entity('products')
export class ProductModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  @Index()
  categoryId: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'varchar', nullable: true })
  productDescription?: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => CategoryModel, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: CategoryModel;

  @OneToMany(
    () => ProductIngredientModel,
    (productIngredient) => productIngredient.product,
  )
  productIngredients: ProductIngredientModel[];

  @OneToMany(
    () => CustomerOrderProductsModel,
    (orderProduct) => orderProduct.product,
  )
  orderProducts: CustomerOrderProductsModel[];

  @OneToMany(() => ProductReviewModel, (review) => review.product)
  reviews: ProductReviewModel[];

  @OneToMany(() => ProductImageModel, (image) => image.product)
  images: ProductImageModel[];

  @OneToMany(() => ProductPromotionModel, (promotion) => promotion.product)
  promotions: ProductPromotionModel[];
}
