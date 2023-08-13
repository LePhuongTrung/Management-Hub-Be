import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { Restaurant } from '@entity/restaurant.entity';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'float' })
  accrualRate: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Restaurant, (restaurant) => restaurant.brands)
  restaurants: Restaurant[];

  @OneToMany(() => Account, (account) => account.brands)
  accounts: Account[];
}
