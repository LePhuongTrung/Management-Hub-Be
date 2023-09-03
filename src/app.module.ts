import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from '@config/app.config';
import { DatabaseModule } from '@config/database.module';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';

import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      load: [config],
    }),
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
