import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { InternalServerErrorMessages } from '@enums/message.enum';
import { AuthService, RegisterResponse } from '@module/auth/auth.service';
import { RegisterDto } from '@module/auth/dto/register.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    description: 'The user has been successfully created.',
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: InternalServerErrorMessages.INTERNAL_SERVER_ERROR,
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto): Promise<RegisterResponse> {
    const result = await this.authService.register(registerDto);
    return { access_token: result.access_token };
  }
}
