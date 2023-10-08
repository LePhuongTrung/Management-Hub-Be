import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from '@config/app.config';
import { DatabaseModule } from '@config/database.module';
import { AuthModule } from '@module/auth/auth.module';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';

@Module({
  controllers: [AppController],
  imports: [
    DatabaseModule.forRoot('default'),
    DatabaseModule.forRoot('test'),
    ConfigModule.forRoot({
      load: [config],
    }),
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
