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
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { CustomerOrderProducts } from '@entity/customerOrderProduct.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { OrderStatus } from '@enums/orderStatus.enum';

@Entity('orders')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'customer_id', type: 'int' })
  @Index()
  customerId: number;

  @Column({ name: 'restaurant_id', type: 'int' })
  @Index()
  restaurantId: number;

  @Column({ name: 'order_date', type: 'timestamp' })
  orderDate: Date;

  @Column({
    default: OrderStatus.PENDING,
    enum: OrderStatus,
    name: 'order_status',
    type: 'enum',
  })
  orderStatus: number;

  @Column({ name: 'total_amount', type: 'float' })
  totalAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => Account, (account) => account.orders)
  @JoinColumn({ name: 'customer_id' })
  customers: Account;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
  @JoinColumn({ name: 'restaurant_id' })
  restaurants: Restaurant;

  @OneToMany(() => CustomerOrderProducts, (cop) => cop.orders)
  customerOrderProducts: CustomerOrderProducts[];
}
