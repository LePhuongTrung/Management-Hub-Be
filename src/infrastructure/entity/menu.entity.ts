import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Category } from '@entity/category.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';

@Entity('menus')
export class Menu extends TimestampedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'restaurant_id', type: 'int' })
  restaurantId: number;

  @Column({ nullable: true, type: 'varchar' })
  description?: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menus)
  @JoinColumn({ name: 'restaurant_id' })
  restaurants: Restaurant;

  @OneToMany(() => Category, (category) => category.menu)
  categories: Category[];
}
