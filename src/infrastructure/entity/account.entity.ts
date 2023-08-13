import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Gender } from '@enums/gender.enum';
import { AccountStatus } from '@enums/accountStatus.enum';
AccountStatus;
import { Role } from '@entity/role.entity';
import { Brand } from '@entity/brand.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { Order } from '@entity/order.entity';
import { ProductReview } from '@entity/productReview.entity';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  token?: string;

  @Column({ type: 'varchar', nullable: true })
  username?: string;

  @Column({ type: 'varchar', nullable: true })
  password?: string;

  @Column({ type: 'int', name: 'role_id' })
  roleId: number;

  @Column({ type: 'varchar', nullable: true, name: 'full_name' })
  fullName?: string;

  @Column({ type: 'int', nullable: true, name: 'restaurant_id' })
  restaurantId?: number;

  @Column({ type: 'int', name: 'brand_id' })
  brandId: number;

  @Column({ type: 'varchar', name: 'phone_number' })
  phoneNumber: string;

  @Column({ type: 'enum', enum: Gender, default: Gender.MALE })
  gender: Gender;

  @Column({ type: 'varchar', nullable: true })
  address?: string;

  @Column({
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.UNCONFIRMED,
  })
  status: AccountStatus;

  @Column({ type: 'timestamp', name: 'token_date' })
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
