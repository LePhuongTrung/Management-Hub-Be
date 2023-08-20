import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

import { Product } from '@entity/product.entity';

@Entity('product_promotions')
export class ProductPromotion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'product_id' })
  productId: number;

  @Column({ type: 'varchar', name: 'promotion_detail' })
  promotionDetail: string;

  @Column({ type: 'timestamp', name: 'start_date' })
  startDate: Date;

  @Column({ type: 'timestamp', name: 'end_date' })
  endDate: Date;

  @ManyToOne(() => Product, (product) => product.promotions)
  @JoinColumn({ name: 'product_id' })
  products: Product;
}
