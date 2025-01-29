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

  public async getWeather(city: string): Promise<IWeather> {
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

    // const weatherFromCache =
    //   await this.weatherRepository.getWeatherFromCache(city);
    // if (weatherFromCache) {
    //   return weatherFromCache;
    // }
    //
    // const weatherFromDB = await this.weatherRepository.getWeatherFromDB(city);
    // if (weatherFromDB) {
    //   return weatherFromDB;
    // }
    //
    // const weatherFromAPI = await this.getWeatherFromAPI(city);
    // if (weatherFromAPI) {
    //   return await this.saveWeather(weatherFromAPI);
    // }
  }

  // private async getWeatherFromAPI(city: string): Promise<IWeather> {
  //   const apiKey = 'YOUR_API_KEY';
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  //
  //   const response = await axios.get(url);
  //
  //   const { data } = response;
  //
  //   return {
  //     city: data.city,
  //     weather: {
  //       description: data.weather[0].description,
  //     },
  //     main: {
  //       temp: data.main.temp,
  //     },
  //   };
  // }
  //
  // private async saveWeather(param: IWeather): Promise<IWeather> {
  //   await this.weatherRepository.saveWeather(param);
  //   await this.weatherRepository.cacheWeather(param);
  //   return param;
  // }
}
