import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { RatingEnum } from '@enums/rating.enum';

@Entity('brands')
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({
    default: RatingEnum.OneStar,
    enum: RatingEnum,
    name: 'accrual_rate',
    type: 'enum',
  })
  accrualRate: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToMany(() => Restaurant, (restaurant) => restaurant.brands)
  restaurants: Restaurant[];

  @OneToMany(() => Account, (account) => account.brands)
  accounts: Account[];
}
