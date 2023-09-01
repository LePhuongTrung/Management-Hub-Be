import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from '@config/app.config';
import { DatabaseModule } from '@config/database.module';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';

@Module({
  controllers: [AppController],
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
