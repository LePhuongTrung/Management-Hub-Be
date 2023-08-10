import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { MenuModel } from '@models/menus.model';
import { ProductModel } from '@models/products.model';

@Entity('categories')
export class CategoryModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  @Index()
  menuId: number;

  @Column({ type: 'varchar', nullable: true })
  categoryDescription?: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => MenuModel, (menu) => menu.categories)
  @JoinColumn({ name: 'menu_id' })
  menu: MenuModel;

  @OneToMany(() => ProductModel, (product) => product.category)
  products: ProductModel[];
}
