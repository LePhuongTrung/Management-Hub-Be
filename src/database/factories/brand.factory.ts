import { randBrand, randPastDate } from '@ngneat/falso';
import { define } from 'typeorm-seeding';

import { Brand } from '@entity/brand.entity';
import { RatingEnum } from '@enums/rating.enum';

define(Brand, () => {
  const brand = new Brand();

  const numericRatings = Object.values(RatingEnum).filter(
    (value) => typeof value === 'number',
  ) as number[];
  brand.accrualRate =
    numericRatings[Math.floor(Math.random() * numericRatings.length)];

  brand.name = randBrand({ length: 10 })[0];
  brand.createdAt = randPastDate();
  return brand;
});
