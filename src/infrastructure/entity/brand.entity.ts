import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { Restaurant } from '@entity/restaurant.entity';

@Entity('brands')
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'float', name: 'accrual_rate' })
  accrualRate: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Restaurant, (restaurant) => restaurant.brands)
  restaurants: Restaurant[];

  @OneToMany(() => Account, (account) => account.brands)
  accounts: Account[];
}
