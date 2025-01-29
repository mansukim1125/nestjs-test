import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { IWeather } from '../common/interfaces/weather.interface';

@Controller('/v2/weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  getWeather(@Query('city') city: string): IWeather {
    return this.weatherService.getWeather(city);
  }
}
