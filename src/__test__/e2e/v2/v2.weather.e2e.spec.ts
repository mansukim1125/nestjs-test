'use strict';

import { createNestApp } from '../../../createNestApp';

import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

const apiVersion = 'v2';

describe(`/${apiVersion}/weather`, () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = (await createNestApp()).nestApp;
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return 400 if city parameter is missing', async () => {
    // 도시 파라미터가 주어지지 않았을 경우
    const res = await request(app.getHttpServer()).get(
      `/${apiVersion}/weather`,
    );

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      message: 'city is required',
    });
  });

  it('should return weather data for an existing city', async () => {
    // 존재하는 날씨 데이터를 조회하는 경우
    const res = await request(app.getHttpServer())
      .get(`/${apiVersion}/weather`)
      .query({ city: 'Seoul' });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      city: 'Seoul',
      weather: {
        description: 'Cloudy',
      },
      main: {
        temp: 14.5,
      },
    });
  });

  it('should return 404 if weather data for the city is not found', async () => {
    // 존재하지 않는 도시의 날씨 데이터를 조회하는 경우
    const res = await request(app.getHttpServer())
      .get(`/${apiVersion}/weather`)
      .query({ city: 'NotExist' });

    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      message: 'No weather found',
    });
  });
});
