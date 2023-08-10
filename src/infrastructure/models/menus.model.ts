import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { RestaurantModel } from '@models/restaurants.model';
import { CategoryModel } from '@models/categories.model';

@Entity('menus')
export class MenuModel {
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

  @ManyToOne(() => RestaurantModel, (restaurant) => restaurant.menus)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantModel;

  @OneToMany(() => CategoryModel, (category) => category.menu)
  categories: CategoryModel[];
}
