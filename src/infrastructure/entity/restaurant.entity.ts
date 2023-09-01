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

import { Account } from '@entity/account.entity';
import { Brand } from '@entity/brand.entity';
import { Inventory } from '@entity/inventories.entity';
import { Menu } from '@entity/menu.entity';
import { Order } from '@entity/order.entity';

@Entity('restaurants')
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'brand_id', type: 'int' })
  brandId: number;

  @Column({ type: 'varchar' })
  location: string;

  @Column({ name: 'restaurant_description', nullable: true, type: 'varchar' })
  restaurantDescription?: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Brand, (brand) => brand.restaurants)
  @JoinColumn({ name: 'brand_id' })
  brands: Brand;

  @OneToMany(() => Menu, (menu) => menu.restaurants)
  menus: Menu[];

  @OneToMany(() => Order, (order) => order.restaurants)
  orders: Order[];

  @OneToMany(() => Account, (account) => account.restaurants)
  accounts: Account[];

  @OneToMany(() => Inventory, (inventory) => inventory.restaurants)
  inventories: Inventory[];
}
