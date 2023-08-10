import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { ProductModel } from '@models/products.model';

@Entity('product_images')
export class ProductImageModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  productId: number;

  @Column({ type: 'varchar' })
  imageUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => ProductModel)
  @JoinColumn({ name: 'product_id' })
  product: ProductModel;
}
