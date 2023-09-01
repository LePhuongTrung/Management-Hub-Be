import { Injectable } from '@nestjs/common';
import { Seeder, Factory } from 'typeorm-seeding';

import { Brand } from '@entity/brand.entity';

@Injectable()
export class BrandCreateSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Brand)().createMany(20);
  }
}
