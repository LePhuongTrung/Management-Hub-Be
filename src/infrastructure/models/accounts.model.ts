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

import { RoleModel } from '@models/roles.model';
import { RestaurantModel } from '@models/restaurants.model';
import { BrandModel } from '@models/brands.model';
import { ProductReviewModel } from '@models/productReviews.model';

@Entity('accounts')
export class AccountModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  token?: string;

  @Column({ type: 'varchar', nullable: true })
  username?: string;

  @Column({ type: 'varchar', nullable: true })
  password?: string;

  @Column({ type: 'int' })
  roleId: number;

  @Column({ type: 'varchar', nullable: true })
  fullName?: string;

  @Column({ type: 'int', nullable: true })
  restaurantId?: number;

  @Column({ type: 'int' })
  brandId: number;

  @Column({ type: 'varchar' })
  phoneNumber: string;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column({ type: 'varchar', nullable: true })
  address?: string;

  @Column({ type: 'enum', enum: AccountStatus })
  status: AccountStatus;

  @Column({ type: 'timestamp' })
  tokenDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => RoleModel, (role) => role.accounts)
  @JoinColumn({ name: 'role_id' })
  role: RoleModel;

  @ManyToOne(() => RestaurantModel, (restaurant) => restaurant.accounts)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantModel;

  @ManyToOne(() => BrandModel, (brand) => brand.owner)
  @JoinColumn({ name: 'brand_id' })
  brand: BrandModel;

  @OneToMany(() => OrderModel, (order) => order.customer)
  orders: OrderModel[];

  @OneToMany(() => ProductReviewModel, (review) => review.account)
  reviews: ProductReviewModel[];
}
