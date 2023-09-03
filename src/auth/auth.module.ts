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
    TypeOrmModule.forFeature([Account]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
    ConfigModule.forRoot(),
  ],
  providers: [AuthService],
})
export class AuthModule {}
