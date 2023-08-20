import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
		BaseEntity
} from 'typeorm';

import { Menu } from '@entity/menu.entity';
import { Product } from '@entity/product.entity';

@Entity('categories')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int', name: 'menu_id' })
  @Index()
  menuId: number;

  @Column({ type: 'varchar', nullable: true, name: 'category_description' })
  categoryDescription?: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Menu, (menu) => menu.categories)
  @JoinColumn({ name: 'menu_id' })
  menu: Menu;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
