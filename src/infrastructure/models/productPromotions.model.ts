import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ProductModel } from '@models/products.model';

@Entity('product_promotions')
export class ProductPromotionModel {
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

  @ManyToOne(() => ProductModel)
  @JoinColumn({ name: 'product_id' })
  product: ProductModel;
}
