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

  @Column({ type: 'int', name: 'product_id' })
  productId: number;

  @Column({ type: 'int', name: 'account_id' })
  accountId: number;

  @Column({
    type: 'enum',
    enum: RatingEnum,
    default: RatingEnum.OneStar,
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
