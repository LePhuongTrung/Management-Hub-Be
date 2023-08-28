import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import DatabaseLogger from '@config/databaseLogger';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        logger: new DatabaseLogger(),
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: ['dist/infrastructure/entity/*.entity.js'],
        migrations: ['dist/database/migrations/*.{js,ts}'],
        factories: ['dist/database/factories/*.{js,ts}'],
        seeds: ['dist/database/seeds/*.{js,ts}'],
        synchronize: true,
        autoLoadEntities: true,
        cli: {
          entitiesDir: 'src/infrastructure/entity',
          subscribersDir: 'src/database/subscribers',
        },
      }),
    }),
  ],
})
export class DatabaseModule {}
