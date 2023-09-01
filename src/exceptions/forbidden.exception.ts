import { HttpException, HttpStatus } from '@nestjs/common';

import { ForbiddenMessages } from '@enums/message.enum';

export class ForbiddenException extends HttpException {
  constructor(message = ForbiddenMessages.FORBIDDEN) {
    super(message, HttpStatus.FORBIDDEN);
  }
}
