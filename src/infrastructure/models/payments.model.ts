import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { OrderModel } from '@models/orders.model';
import { PaymentMethodModel } from '@models/paymentMethods.model';

@Entity('payments')
export class PaymentModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  orderId: number;

  @Column({ type: 'int' })
  methodId: number;

  @Column({ type: 'varchar' }) // Define this as an ENUM if you have specific statuses
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => OrderModel)
  @JoinColumn({ name: 'order_id' })
  order: OrderModel;

  @ManyToOne(() => PaymentMethodModel)
  @JoinColumn({ name: 'method_id' })
  method: PaymentMethodModel;
}
