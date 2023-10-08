import { HttpException, HttpStatus } from '@nestjs/common';

import { UnprocessableEntityMessages } from '@enums/message.enum';

export class UnprocessableEntityException extends HttpException {
  constructor(message = UnprocessableEntityMessages.UNPROCESSABLE_ENTITY) {
    super(message, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
