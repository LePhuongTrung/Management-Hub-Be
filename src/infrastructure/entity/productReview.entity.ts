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
