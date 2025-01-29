import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { WeatherModule } from './weather/weather.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [PrismaModule, UserModule, PostModule, WeatherModule, CacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
