import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { TimestampedEntity } from '@entity/timestamped.entity';
import { RoleTypes } from '@enums/role-types.enum';

@Entity('roles')
@Unique(['name'])
export class Role extends TimestampedEntity {
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

  @OneToMany(() => Account, (account) => account.roles)
  accounts: Account[];
}
