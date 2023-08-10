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

import { AccountModel } from '@models/accounts.model';
import { RestaurantModel } from '@models/restaurants.model';
import { PaymentModel } from '@models/payments.model';
import { CustomerOrderProductsModel } from '@models/customerOrderProducts.model';

@Entity('orders')
export class OrderModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  @Index()
  customerId: number;

  @Column({ type: 'int' })
  @Index()
  restaurantId: number;

  @Column({ type: 'datetime' })
  orderDate: Date;

  @Column({
    type: 'enum',
    enum: [1, 2, 3],
  })
  orderStatus: number;

  @Column({ type: 'float' })
  totalAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => AccountModel, (account) => account.orders)
  @JoinColumn({ name: 'customer_id' })
  customer: AccountModel;

  @ManyToOne(() => RestaurantModel, (restaurant) => restaurant.orders)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantModel;

  @OneToMany(() => PaymentModel, (payment) => payment.order)
  payments: PaymentModel[];

  @OneToMany(() => CustomerOrderProductsModel, (cop) => cop.order)
  customerOrderProducts: CustomerOrderProductsModel[];
}
