import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Order } from '@entity/order.entity';
import { Product } from '@entity/product.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';

@Entity('customer_order_products')
export class CustomerOrderProducts extends TimestampedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'phone_number', type: 'varchar' })
  phoneNumber: string;

  @Column({ name: 'product_id', type: 'int' })
  productId: number;

  @Column({ name: 'order_id', type: 'int' })
  @Index()
  orderId: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ nullable: true, type: 'varchar' })
  description?: string;

  @ManyToOne(() => Order, (order) => order.customerOrderProducts)
  @JoinColumn({ name: 'order_id' })
  orders: Order;

  @ManyToOne(() => Product, (product) => product.customerOrderProducts)
  @JoinColumn({ name: 'product_id' })
  products: Product;
}
