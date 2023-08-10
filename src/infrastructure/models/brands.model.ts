import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { AccountModel } from '@models/accounts.model';
import { RestaurantModel } from '@models/restaurants.model';

@Entity('brands')
export class BrandModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  ownId: number;

  @Column({ type: 'float' })
  accrualRate: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => AccountModel)
  @JoinColumn({ name: 'own_id' })
  owner: AccountModel;

  @OneToMany(() => RestaurantModel, (restaurant) => restaurant.brand)
  restaurants: RestaurantModel[];
}
