import { HttpException, HttpStatus } from '@nestjs/common';

import { MethodNotAllowedMessages } from '@enums/message.enum';

export class MethodNotAllowedException extends HttpException {
  constructor(message = MethodNotAllowedMessages.METHOD_NOT_ALLOWED) {
    super(message, HttpStatus.METHOD_NOT_ALLOWED);
  }
}
