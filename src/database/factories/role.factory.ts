import { rand, randCatchPhrase } from '@ngneat/falso';
import { define } from 'typeorm-seeding';

import { Role } from '@entity/role.entity';
import { RoleTypes } from '@enums/roleTypes.enum';

define(Role, () => {
  const role = new Role();
  const roleTypeKeys = Object.keys(RoleTypes) as Array<keyof typeof RoleTypes>;
  const randomRoleTypeKey = rand(roleTypeKeys);

  if (Object.prototype.hasOwnProperty.call(RoleTypes, randomRoleTypeKey)) {
    role.name = RoleTypes[randomRoleTypeKey];
  } else {
    throw new Error('Invalid role type key generated.');
  }

  role.description = randCatchPhrase({ length: 10 })[0];
  return role;
});
