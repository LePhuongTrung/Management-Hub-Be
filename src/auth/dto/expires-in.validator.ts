import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { BadRequestMessages } from '@enums/message.enum';

@ValidatorConstraint({ async: false, name: 'expiresInValidator' })
export class ExpiresInValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    const pattern = /^(\d+)([smhd])$/;
    return pattern.test(value);
  }

  defaultMessage(): string {
    return BadRequestMessages.INVALID_TOKEN_EXPIRATION;
  }
}
