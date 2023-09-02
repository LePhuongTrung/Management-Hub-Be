import { Injectable } from '@nestjs/common';
import { Seeder, Factory } from 'typeorm-seeding';

import { Role } from '@entity/role.entity';
import { RoleTypes } from '@enums/role-types.enum';

@Injectable()
export class RoleCreateSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const roleTypeValues = Object.values(RoleTypes);
    for (const roleType of roleTypeValues) {
      await factory(Role)().create({ name: roleType });
    }
  }
}
