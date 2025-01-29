import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { WeatherRepository } from './weather.repository';
import { CacheModule } from '../cache/cache.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [CacheModule, PrismaModule],
  providers: [WeatherService, WeatherRepository],
  controllers: [WeatherController],
  exports: [WeatherService],
})
export class WeatherModule {}
