import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
} from 'typeorm';
import { RoleTypes } from '@enums/roleTypes.enum';

@Entity('roles')
@Unique(['name'])
export class RoleModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: RoleTypes,
  })
  name: RoleTypes;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;
}
