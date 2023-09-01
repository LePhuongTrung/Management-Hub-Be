import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { RoleTypes } from '@enums/roleTypes.enum';

@Entity('roles')
@Unique(['name'])
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: RoleTypes.CUSTOMER,
    enum: RoleTypes,
    type: 'enum',
    unique: true,
  })
  name: string;

  @Column({ nullable: true, type: 'varchar' })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToMany(() => Account, (account) => account.roles)
  accounts: Account[];
}
