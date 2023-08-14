import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { RoleTypes } from '@enums/roleTypes.enum';

import { Account } from '@entity/account.entity';

@Entity('roles')
@Unique(['name'])
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: RoleTypes,
    default: RoleTypes.CUSTOMER,
  })
  name: RoleTypes;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Account, (account) => account.roles)
  accounts: Account[];
}
