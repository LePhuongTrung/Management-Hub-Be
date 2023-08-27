import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
        // entities: ['src/infrastructure/entity/*.entity{.ts,.js}'],
        entities: ['dist/infrastructure/entity/*.entity.js'],
        migrations: [__dirname + '/../database/migrations/*.{js,ts}'],
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
