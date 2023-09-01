import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { Product } from '@entity/product.entity';
import { RatingEnum } from '@enums/rating.enum';

@Entity('product_reviews')
export class ProductReview extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_id', type: 'int' })
  productId: number;

  @Column({ name: 'account_id', type: 'int' })
  accountId: number;

  @Column({
    default: RatingEnum.OneStar,
    enum: RatingEnum,
    type: 'enum',
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
