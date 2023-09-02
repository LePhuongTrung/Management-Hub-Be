import { HttpException, HttpStatus } from '@nestjs/common';

import { BadRequestMessages } from '@enums/message.enum';

export class BadRequestException extends HttpException {
  constructor(message = BadRequestMessages.BAD_REQUEST) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
