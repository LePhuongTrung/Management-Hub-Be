import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { OrderModel } from '@models/orders.model';
import { ProductModel } from '@models/products.model';

@Entity('customer_order_products')
export class CustomerOrderProductsModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  phoneNumber: string;

  @Column({ type: 'int' })
  productId: number;

  @Column({ type: 'int' })
  @Index()
  orderId: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => OrderModel, (order) => order.customerOrderProducts)
  @JoinColumn({ name: 'order_id' })
  order: OrderModel;

  @ManyToOne(() => ProductModel, (product) => product.customerOrderProducts)
  @JoinColumn({ name: 'product_id' })
  product: ProductModel;
}
