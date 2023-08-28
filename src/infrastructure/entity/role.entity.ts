import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { RoleTypes } from '@enums/roleTypes.enum';

@Entity('roles')
@Unique(['name'])
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: RoleTypes,
    default: RoleTypes.CUSTOMER,
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
