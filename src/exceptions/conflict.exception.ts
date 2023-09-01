import { HttpException, HttpStatus } from '@nestjs/common';

import { ConflictMessages } from '@enums/message.enum';

export class ConflictException extends HttpException {
  constructor(message = ConflictMessages.CONFLICT) {
    super(message, HttpStatus.CONFLICT);
  }
}
