import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { BrandModel } from '@models/brands.model';
import { MenuModel } from '@models/menus.model';
import { AccountModel } from '@models/accounts.model';
import { InventoryModel } from '@models/inventories.model';

@Entity('restaurants')
export class RestaurantModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  brandId: number;

  @Column({ type: 'varchar' })
  location: string;

  @Column({ type: 'varchar', nullable: true })
  restaurantDescription?: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => BrandModel)
  @JoinColumn({ name: 'brand_id' })
  brand: BrandModel;

  @OneToMany(() => MenuModel, (menu) => menu.restaurant)
  menus: MenuModel[];

  @OneToMany(() => AccountModel, (account) => account.restaurant)
  accounts: AccountModel[];

  @OneToMany(() => InventoryModel, (inventory) => inventory.restaurant)
  inventories: InventoryModel[];
}
