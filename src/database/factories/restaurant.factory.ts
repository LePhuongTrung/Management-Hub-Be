import { randBrand, randCounty, randText, rand } from '@ngneat/falso';
import { define } from 'typeorm-seeding';

import { Restaurant } from '@entity/restaurant.entity';

define(Restaurant, () => {
  const restaurant = new Restaurant();

  restaurant.name = randBrand({ length: 10 })[0];
  restaurant.brandId = rand([1, 2, 3, 4, 5]);
  restaurant.location = randCounty();
  restaurant.restaurantDescription = randText({ length: 100 })[0];

  return restaurant;
});
