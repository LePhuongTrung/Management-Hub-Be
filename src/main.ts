import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import config from '@config/app.config';
import { AppModule } from '@src/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  configureApp(app);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('The example API description')
    .setVersion('1.0')
    .addTag('example')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(config().port);
  console.log(`Server is running on http://localhost:${config().port}`);
  console.log(
    `Swagger UI is available at http://localhost:${config().port}/api-docs`,
  );
}

function configureApp(app: INestApplication): void {
  app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
}

bootstrap();
