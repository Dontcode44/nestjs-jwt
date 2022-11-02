import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as coojieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(coojieParser());
  app.enableCors({
    origin: 'http://localhost:4000',
    credentials: true,
  });
  await app.listen(4000);
}
bootstrap();
