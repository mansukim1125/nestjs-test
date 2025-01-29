import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { WeatherRepository } from './weather.repository';
import { IWeather } from '../common/interfaces/weather.interface';

@Injectable()
export class WeatherService {
  constructor(private readonly weatherRepository: WeatherRepository) {}

  public getWeather(city: string): IWeather {
    if (!city) {
      throw new BadRequestException({
        message: 'city is required',
      });
    }

    const weatherData = this.weatherRepository.getWeather(city);
    if (!weatherData) {
      throw new NotFoundException({
        message: 'No weather found',
      });
    }

    return weatherData;
  }
}
