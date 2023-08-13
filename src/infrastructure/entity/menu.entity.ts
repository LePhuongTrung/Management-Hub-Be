import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Restaurant } from '@entity/restaurant.entity';
import { Category } from '@entity/category.entity';

@Entity('menus')
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  restaurantId: number;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menus)
  @JoinColumn({ name: 'restaurant_id' })
  restaurants: Restaurant;

  @OneToMany(() => Category, (category) => category.menu)
  categories: Category[];
}
