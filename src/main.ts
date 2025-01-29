import { createNestApp } from './createNestApp';

export async function bootstrap() {
  const { nestApp, expressApp } = await createNestApp();

  await nestApp.init();

  expressApp.listen(process.env.PORT ?? 3000);
}

bootstrap();
