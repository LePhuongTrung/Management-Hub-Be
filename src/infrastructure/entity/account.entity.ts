import { BadRequestException } from '@nestjs/common';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from 'typeorm';

import { Brand } from '@entity/brand.entity';
import { Order } from '@entity/order.entity';
import { ProductReview } from '@entity/product-review.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { Role } from '@entity/role.entity';
import { AccountStatus } from '@enums/account-status.enum';
import { Gender } from '@enums/gender.enum';
import { BadRequestMessages } from '@enums/message.enum';
import { ExpiresInValidator } from '@src/auth/dto/expires-in.validator';

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

  @Column({
    default: Gender.MALE,
    type: 'int',
  })
  gender: number;

  @BeforeInsert()
  @BeforeUpdate()
  @AfterLoad()
  validateGender(): void {
    if (!Object.values(Gender).includes(this.gender)) {
      throw new BadRequestException(BadRequestMessages.INVALID_ACCRUAL_RATE);
    }
  }

  @Column({ nullable: true, type: 'varchar' })
  address?: string;

  @Column({
    default: AccountStatus.UNCONFIRMED,
    type: 'int',
  })
  status: number;

  @BeforeInsert()
  @BeforeUpdate()
  @AfterLoad()
  validateStatusRate(): void {
    if (!Object.values(AccountStatus).includes(this.status)) {
      throw new BadRequestException(BadRequestMessages.INVALID_ACCRUAL_RATE);
    }
  }

  @Column({ name: 'token_date', type: 'varchar' })
  tokenDate: string;

  @BeforeInsert()
  @BeforeUpdate()
  @AfterLoad()
  validateTokenDate(): void {
    const validator = new ExpiresInValidator();
    if (!validator.validate(this.tokenDate)) {
      throw new BadRequestException(validator.defaultMessage());
    }
  }

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

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
