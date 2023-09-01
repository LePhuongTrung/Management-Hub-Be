import { HttpException, HttpStatus } from '@nestjs/common';

import { GoneMessages } from '@enums/message.enum';

export class GoneException extends HttpException {
  constructor(message = GoneMessages.GONE) {
    super(message, HttpStatus.GONE);
  }
}
