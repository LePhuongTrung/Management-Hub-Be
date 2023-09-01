import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

import { Brand } from '@entity/brand.entity';
import { Order } from '@entity/order.entity';
import { ProductReview } from '@entity/productReview.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { Role } from '@entity/role.entity';
import { AccountStatus } from '@enums/accountStatus.enum';
import { Gender } from '@enums/gender.enum';

@Entity('accounts')
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, type: 'varchar' })
  token?: string;

  @Column({ nullable: true, type: 'varchar' })
  username?: string;

  @Column({ nullable: true, type: 'varchar' })
  password?: string;

  @Column({ name: 'role_id', type: 'int' })
  roleId: number;

  @Column({ name: 'full_name', nullable: true, type: 'varchar' })
  fullName?: string;

  @Column({ name: 'restaurant_id', nullable: true, type: 'int' })
  restaurantId?: number;

  @Column({ name: 'brand_id', type: 'int' })
  brandId: number;

  @Column({ name: 'phone_number', type: 'varchar' })
  phoneNumber: string;

  @Column({ default: Gender.MALE, enum: Gender, type: 'enum' })
  gender: Gender;

  @Column({ nullable: true, type: 'varchar' })
  address?: string;

  @Column({
    default: AccountStatus.UNCONFIRMED,
    enum: AccountStatus,
    type: 'enum',
  })
  status: AccountStatus;

  @Column({ name: 'token_date', type: 'timestamp' })
  tokenDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Role, (role) => role.accounts)
  @JoinColumn({ name: 'role_id' })
  roles: Role;

  @ManyToOne(() => Brand, (brand) => brand.accounts)
  @JoinColumn({ name: 'brand_id' })
  brands: Brand;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.accounts)
  @JoinColumn({ name: 'restaurant_id' })
  restaurants: Restaurant;

  @OneToMany(() => Order, (order) => order.customers)
  orders: Order[];

  @OneToMany(() => ProductReview, (review) => review.accounts)
  reviews: ProductReview[];
}
