import { Controller, Post, Body } from '@nestjs/common';

import { AuthService, RegisterResponse } from '@module/auth/auth.service';
import { RegisterDto } from '@module/auth/dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<RegisterResponse> {
    return await this.authService.register(registerDto);
  }
}
