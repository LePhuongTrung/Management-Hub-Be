import { BadRequestException } from '@nestjs/common';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { Product } from '@entity/product.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';
import { BadRequestMessages } from '@enums/message.enum';
import { RatingEnum } from '@enums/rating.enum';

@Entity('product_reviews')
export class ProductReview extends TimestampedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_id', type: 'int' })
  productId: number;

  @Column({ name: 'account_id', type: 'int' })
  accountId: number;

  @Column({
    default: RatingEnum.OneStar,
    type: 'int',
  })
  rating: number;

  @BeforeInsert()
  @BeforeUpdate()
  @AfterLoad()
  validateRating(): void {
    if (!Object.values(RatingEnum).includes(this.rating)) {
      throw new BadRequestException(BadRequestMessages.INVALID_ACCRUAL_RATE);
    }
  }

  @Column({ type: 'varchar' })
  comment: string;

  @ManyToOne(() => Product, (product) => product.reviews)
  @JoinColumn({ name: 'product_id' })
  products: Product;

  @ManyToOne(() => Account, (product) => product.reviews)
  @JoinColumn({ name: 'account_id' })
  accounts: Account;
}
