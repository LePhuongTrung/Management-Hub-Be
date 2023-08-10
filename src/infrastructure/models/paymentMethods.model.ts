import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('payment_methods')
export class PaymentMethodModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;
}
