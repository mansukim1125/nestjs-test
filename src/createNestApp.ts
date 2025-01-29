import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';

export async function createNestApp() {
  const { app: expressApp } = require('../app/main.js');

  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  return { nestApp: app, expressApp };
}
