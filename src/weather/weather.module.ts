import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { WeatherRepository } from './weather.repository';

@Module({
  providers: [WeatherService, WeatherRepository],
  controllers: [WeatherController],
  exports: [WeatherService],
})
export class WeatherModule {}
