import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from './weather.service';
const axios = require('axios');

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherService],
    }).compile();

    service = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return weather data', async () => {
    const mockResponse = {
      data: {
        weather: [
          {
            description: 'clear sky',
          },
        ],
        main: {
          temp: 300,
        },
      },
    };

    jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);

    const result = await service.getWeather('Seoul');
    console.log(result);
    expect(result).toEqual(mockResponse.data);
  });
});
