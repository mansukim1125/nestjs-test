import { Injectable } from '@nestjs/common';
import { IWeather } from '../common/interfaces/weather.interface';

@Injectable()
export class WeatherRepository {
  private readonly weathers: Record<string, IWeather>;

  constructor() {
    this.weathers = {
      Seoul: {
        city: 'Seoul',
        weather: {
          description: 'Cloudy',
        },
        main: {
          temp: 14.5,
        },
      },
      Washington: {
        city: 'Washington',
        weather: {
          description: 'Sunny',
        },
        main: {
          temp: 20.5,
        },
      },
    };
  }

  public getWeather(city: string): IWeather | undefined {
    return this.weathers[city];
  }
}
