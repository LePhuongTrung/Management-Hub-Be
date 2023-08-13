import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Product } from '@entity/product.entity';

@Entity('product_promotions')
export class ProductPromotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  productId: number;

  @Column({ type: 'varchar' })
  promotionDetail: string;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @ManyToOne(() => Product, (product) => product.promotions)
  @JoinColumn({ name: 'product_id' })
  products: Product;
}
