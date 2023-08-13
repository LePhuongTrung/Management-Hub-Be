import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

import { RatingEnum } from '@enums/rating.enum';

import { Product } from '@entity/product.entity';
import { Account } from '@entity/account.entity';

@Entity('product_reviews')
export class ProductReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  productId: number;

  @Column({ type: 'int' })
  accountId: number;

  @Column({
    type: 'enum',
    enum: RatingEnum,
  })
  rating: RatingEnum;

  @Column({ type: 'varchar' })
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Product, (product) => product.reviews)
  @JoinColumn({ name: 'product_id' })
  products: Product;

  @ManyToOne(() => Account, (product) => product.reviews)
  @JoinColumn({ name: 'account_id' })
  accounts: Account;
}
