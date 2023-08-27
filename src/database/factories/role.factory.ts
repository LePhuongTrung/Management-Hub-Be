import { rand, randCatchPhrase } from '@ngneat/falso';
import { define } from 'typeorm-seeding';
import { Role } from '@entity/role.entity';
import { RoleTypes } from '@enums/roleTypes.enum';

define(Role, () => {
  const role = new Role();
  const roleTypeKeys = Object.keys(RoleTypes) as Array<keyof typeof RoleTypes>;
  const randomRoleTypeKey = rand(roleTypeKeys);
  role.name = RoleTypes[randomRoleTypeKey];
  role.description = randCatchPhrase({ length: 10 })[0];
  return role;
});
