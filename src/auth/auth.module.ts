import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account } from '@entity/account.entity';
import { AuthController } from '@module/auth/auth.controller';
import { AuthService } from '@module/auth/auth.service';

@Module({
  controllers: [AuthController],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Account]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
