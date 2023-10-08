import { Injectable } from '@nestjs/common';
import { Seeder, Factory } from 'typeorm-seeding';

import { Restaurant } from '@entity/restaurant.entity';

@Injectable()
export class RestaurantCreateSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Restaurant)().createMany(20);
  }
}
