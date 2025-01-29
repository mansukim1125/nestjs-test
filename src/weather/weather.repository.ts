import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CacheService } from '../cache/cache.service';
import { IWeather } from '../common/interfaces/weather.interface';

@Injectable()
export class WeatherRepository {
  private weathers: Record<string, IWeather>;
  constructor(
    // private readonly prismaService: PrismaService,
    // private readonly cacheService: CacheService,
  ) {
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

  // public async getWeatherFromCache(city: string): Promise<IWeather | null> {
  //   return this.cacheService.get<IWeather>(city);
  // }
  //
  // public async getWeatherFromDB(city: string): Promise<IWeather> {
  //   const oneHourAgo = new Date();
  //   oneHourAgo.setUTCHours(oneHourAgo.getUTCHours() - 1);
  //
  //   const weatherData = await this.prismaService.weather.findUnique({
  //     where: {
  //       city,
  //       // 한 시간 이내 업데이트 된 날씨 데이터만 조회함;
  //       updatedAt: {
  //         gte: oneHourAgo,
  //       },
  //     },
  //   });
  //
  //   return {
  //     city,
  //     weather: {
  //       description: weatherData?.description || '',
  //     },
  //     main: {
  //       temp: weatherData?.temp || 0,
  //     },
  //   };
  // }

  // public async saveWeather(param: IWeather): Promise<IWeather> {
  //   const weather = await this.prismaService.weather.upsert({
  //     create: {
  //       city: param.city,
  //       description: param.weather.description,
  //       temp: param.main.temp,
  //     },
  //     update: {
  //       city: param.city,
  //       description: param.weather.description,
  //       temp: param.main.temp,
  //     },
  //     where: {
  //       city: param.city,
  //     },
  //   });
  //
  //   return {
  //     city: weather.city,
  //     weather: {
  //       description: weather.description,
  //     },
  //     main: {
  //       temp: weather.temp,
  //     },
  //   };
  // }

  // public async cacheWeather(param: IWeather): Promise<IWeather> {
  //   return this.cacheService.set<IWeather>(`weather:${param.city}`, param);
  // }
}
