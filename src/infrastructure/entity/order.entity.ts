import { BadRequestException } from '@nestjs/common';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { CustomerOrderProducts } from '@entity/customer-order-product.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';
import { BadRequestMessages } from '@enums/message.enum';
import { OrderStatus } from '@enums/order-status.enum';

@Entity('orders')
export class Order extends TimestampedEntity {
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
    type: 'int',
  })
  orderStatus: number;

  @BeforeInsert()
  @BeforeUpdate()
  @AfterLoad()
  validateOrderStatus(): void {
    if (!Object.values(OrderStatus).includes(this.orderStatus)) {
      throw new BadRequestException(BadRequestMessages.INVALID_ACCRUAL_RATE);
    }
  }

  @Column({ name: 'total_amount', type: 'float' })
  totalAmount: number;

  @ManyToOne(() => Account, (account) => account.orders)
  @JoinColumn({ name: 'customer_id' })
  customers: Account;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
  @JoinColumn({ name: 'restaurant_id' })
  restaurants: Restaurant;

  @OneToMany(() => CustomerOrderProducts, (cop) => cop.orders)
  customerOrderProducts: CustomerOrderProducts[];
}
