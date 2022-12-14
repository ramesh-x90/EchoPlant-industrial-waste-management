import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AppConfigService } from './common/config/app.config.service';
import { ConfigService } from '@nestjs/config'



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.get<AppConfigService>(AppConfigService).setUp(app);

  const host = app.get(ConfigService).get<string>("HOST");
  const port = app.get(ConfigService).get<number>("PORT");

  await app.listen(port);
  console.log(`Server is running : ${host}:${port}`)

}
bootstrap();



