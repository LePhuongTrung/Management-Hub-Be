import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

import { OrderStatus } from '@enums/orderStatus.enum';

import { Account } from '@entity/account.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { CustomerOrderProducts } from '@entity/customerOrderProduct.entity';

@Entity('orders')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'customer_id' })
  @Index()
  customerId: number;

  @Column({ type: 'int', name: 'restaurant_id' })
  @Index()
  restaurantId: number;

  @Column({ type: 'timestamp', name: 'order_date' })
  orderDate: Date;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
    name: 'order_status',
  })
  orderStatus: number;

  @Column({ type: 'float', name: 'total_amount' })
  totalAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Account, (account) => account.orders)
  @JoinColumn({ name: 'customer_id' })
  customers: Account;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
  @JoinColumn({ name: 'restaurant_id' })
  restaurants: Restaurant;

  @OneToMany(() => CustomerOrderProducts, (cop) => cop.orders)
  customerOrderProducts: CustomerOrderProducts[];
}
