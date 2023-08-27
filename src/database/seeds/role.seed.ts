import { Injectable } from '@nestjs/common';
import { Seeder, Factory } from 'typeorm-seeding';
import { Role } from '@entity/role.entity';

@Injectable()
export class UserCreateSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Role)().create();
  }
}
