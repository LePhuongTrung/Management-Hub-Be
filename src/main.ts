import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Import ConfigService

import { AppModule } from '@src/app.module';
import config from '@config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(config().port);
  console.log(`Server is running on http://localhost:${config().port}`);
}
bootstrap();
