import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { ProductModel } from '@models/products.model';
import { AccountModel } from '@models/accounts.model';

@Entity('product_reviews')
export class ProductReviewModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  productId: number;

  @Column({ type: 'int' })
  accountId: number;

  @Column({ type: 'int' }) // Define this as an ENUM if you have specific ratings
  rating: number;

  @Column({ type: 'varchar' })
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => ProductModel)
  @JoinColumn({ name: 'product_id' })
  product: ProductModel;

  @ManyToOne(() => AccountModel)
  @JoinColumn({ name: 'account_id' })
  account: AccountModel;
}
