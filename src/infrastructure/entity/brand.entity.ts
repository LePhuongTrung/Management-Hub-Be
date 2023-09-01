import { BadRequestException } from '@nestjs/common';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from 'typeorm';

import { Account } from '@entity/account.entity';
import { Restaurant } from '@entity/restaurant.entity';
import { BadRequestMessages } from '@enums/message.enum';
import { RatingEnum } from '@enums/rating.enum';

@Entity('brands')
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({
    default: RatingEnum.OneStar,
    type: 'int',
  })
  accrualRate: number;

  @BeforeInsert()
  @BeforeUpdate()
  @AfterLoad()
  validateAccrualRate(): void {
    if (!Object.values(RatingEnum).includes(this.accrualRate)) {
      throw new BadRequestException(BadRequestMessages.INVALID_ACCRUAL_RATE);
    }
  }

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToMany(() => Restaurant, (restaurant) => restaurant.brands)
  restaurants: Restaurant[];

  @OneToMany(() => Account, (account) => account.brands)
  accounts: Account[];
}
