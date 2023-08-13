import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Order } from '@entity/order.entity';
import { Product } from '@entity/product.entity';

@Entity('customer_order_products')
export class CustomerOrderProducts {
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

  @ManyToOne(() => Order, (order) => order.customerOrderProducts)
  @JoinColumn({ name: 'order_id' })
  orders: Order;

  @ManyToOne(() => Product, (product) => product.customerOrderProducts)
  @JoinColumn({ name: 'product_id' })
  products: Product;
}