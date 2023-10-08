import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Menu } from '@entity/menu.entity';
import { Product } from '@entity/product.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';

@Entity('categories')
export class Category extends TimestampedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'menu_id', type: 'int' })
  @Index()
  menuId: number;

  @Column({ name: 'category_description', nullable: true, type: 'varchar' })
  categoryDescription?: string;

  @ManyToOne(() => Menu, (menu) => menu.categories)
  @JoinColumn({ name: 'menu_id' })
  menu: Menu;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
