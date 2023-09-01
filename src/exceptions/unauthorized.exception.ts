import { HttpException, HttpStatus } from '@nestjs/common';

import { UnauthorizedMessages } from '@enums/message.enum';

export class UnauthorizedException extends HttpException {
  constructor(message = UnauthorizedMessages.UNAUTHORIZED) {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}
