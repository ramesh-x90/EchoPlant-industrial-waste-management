import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from 'process';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client'
import { PrismaService } from './prisma.service';

const port = 3000;
const host = `http://localhost`;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  const config = new DocumentBuilder()
    .setTitle('Echo-Plant')
    .setDescription('Echo-Plant REST Api')
    .setVersion('1.0')
    .addTag('echo_plant')
    .addServer( `${host}:${port}`  , "Echo-Plant REST api")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`Server is running : ${await app.getUrl()}`)


  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

}
bootstrap();



