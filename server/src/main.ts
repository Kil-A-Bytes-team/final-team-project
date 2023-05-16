import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './env';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = env.PORT || 5000
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(PORT);
  Logger.log('Server is successfully running on http:localhost:' + PORT)
}
bootstrap();
