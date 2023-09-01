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

import { Category } from '@entity/category.entity';
import { Restaurant } from '@entity/restaurant.entity';

@Entity('menus')
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'restaurant_id', type: 'int' })
  restaurantId: number;

  @Column({ nullable: true, type: 'varchar' })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menus)
  @JoinColumn({ name: 'restaurant_id' })
  restaurants: Restaurant;

  @OneToMany(() => Category, (category) => category.menu)
  categories: Category[];
}
