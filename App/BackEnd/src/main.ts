import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './common/prisma-module/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import { AppConfigService } from './common/config/app.config.service';

const port = 4000;
const host = `http://localhost`;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.get<AppConfigService>(AppConfigService).setUp(app);

  await app.listen(port);
  console.log(`Server is running : ${host}:${port}`)


  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

}
bootstrap();



