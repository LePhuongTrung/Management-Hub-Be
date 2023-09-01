import { HttpException, HttpStatus } from '@nestjs/common';

import { NotFoundMessages } from '@enums/message.enum';

export class NotFoundException extends HttpException {
  constructor(message = NotFoundMessages.NOT_FOUND) {
    super(message, HttpStatus.NOT_FOUND);
  }
}
