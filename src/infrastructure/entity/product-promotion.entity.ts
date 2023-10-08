import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Product } from '@entity/product.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';

@Entity('product_promotions')
export class ProductPromotion extends TimestampedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_id', type: 'int' })
  productId: number;

  @Column({ name: 'promotion_detail', type: 'varchar' })
  promotionDetail: string;

  @Column({ name: 'start_date', type: 'timestamp' })
  startDate: Date;

  @Column({ name: 'end_date', type: 'timestamp' })
  endDate: Date;

  @ManyToOne(() => Product, (product) => product.promotions)
  @JoinColumn({ name: 'product_id' })
  products: Product;
}
