import { WeatherRepository } from './weather.repository';
import { Test } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { CacheModule } from '../cache/cache.module';
import { CacheService } from '../cache/cache.service';
import { PrismaService } from '../prisma/prisma.service';
import { IWeather } from '../common/interfaces/weather.interface';

describe('WeatherRepository', () => {
  let weatherRepository: WeatherRepository;
  let cacheService: CacheService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const weatherModule = await Test.createTestingModule({
      imports: [CacheModule, PrismaModule],
      providers: [WeatherRepository],
    }).compile();

    weatherRepository = weatherModule.get<WeatherRepository>(WeatherRepository);
    cacheService = weatherModule.get<CacheService>(CacheService);
    prismaService = weatherModule.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(weatherRepository).toBeDefined();
  });

  it('should not cached if data has not been cached', async () => {
    jest.spyOn(cacheService, 'get').mockResolvedValue(undefined);

    const city = 'Seoul';
    const cachedWeatherData = await cacheService.get<IWeather>(
      `weather:${city}`,
    );

    expect(cachedWeatherData).toBeUndefined();
  });

  it('should cached if data has been cached', async () => {
    const weather: IWeather = {

    }
  });
});
