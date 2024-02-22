import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationsModule } from './stations/stations.module';
import { Station } from './stations/entities/station.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      entities: [Station],
      synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true' || false,
    }),
    StationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
