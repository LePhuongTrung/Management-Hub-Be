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
        autoLoadEntities: true,
        cli: {
          entitiesDir: 'src/infrastructure/entity',
          subscribersDir: 'src/database/subscribers',
        },
        database: configService.get('POSTGRES_DB'),
        entities: ['dist/infrastructure/entity/*.entity.js'],
        factories: ['dist/database/factories/*.{js,ts}'],
        host: configService.get('POSTGRES_HOST'),
        logger: new DatabaseLogger(),
        migrations: ['dist/database/migrations/*.{js,ts}'],
        password: configService.get('POSTGRES_PASSWORD'),
        port: configService.get('POSTGRES_PORT'),
        seeds: ['dist/database/seeds/*.{js,ts}'],
        synchronize: true,
        type: 'postgres',
        username: configService.get('POSTGRES_USER'),
      }),
    }),
  ],
})
export class DatabaseModule {}
