import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

import { RoleTypes } from '@enums/roleTypes.enum';

import { Account } from '@entity/account.entity';

@Entity('roles')
@Unique(['name'])
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: RoleTypes,
    default: RoleTypes,
    unique: true,
  })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Account, (account) => account.roles)
  accounts: Account[];
}
