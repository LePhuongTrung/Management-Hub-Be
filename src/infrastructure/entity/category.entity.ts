import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Menu } from '@entity/menu.entity';
import { Product } from '@entity/product.entity';

@Entity('categories')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'menu_id', type: 'int' })
  @Index()
  menuId: number;

  @Column({ name: 'category_description', nullable: true, type: 'varchar' })
  categoryDescription?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => Menu, (menu) => menu.categories)
  @JoinColumn({ name: 'menu_id' })
  menu: Menu;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
