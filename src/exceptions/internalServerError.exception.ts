import { HttpException, HttpStatus } from '@nestjs/common';

import { InternalServerErrorMessages } from '@enums/message.enum';

export class InternalServerErrorException extends HttpException {
  constructor(message = InternalServerErrorMessages.INTERNAL_SERVER_ERROR) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
