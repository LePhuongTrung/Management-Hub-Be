import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index,
  CreateDateColumn,
} from 'typeorm';

import { OrderStatus } from '@enums/orderStatus.enum';

import { Account } from '@entity/account.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { CustomerOrderProducts } from '@entity/customerOrderProduct.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  @Index()
  customerId: number;

  @Column({ type: 'int' })
  @Index()
  restaurantId: number;

  @Column({ type: 'timestamp' })
  orderDate: Date;

  @Column({
    type: 'enum',
    enum: OrderStatus,
  })
  orderStatus: number;

  @Column({ type: 'float' })
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
