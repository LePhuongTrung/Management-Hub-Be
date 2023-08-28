import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import config from '@config/app.config';
import { AppModule } from '@src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureApp(app);
  await app.listen(config().port);
  console.log(`Server is running on http://localhost:${config().port}`);
}

function configureApp(app: any) {
  app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
}

bootstrap();
