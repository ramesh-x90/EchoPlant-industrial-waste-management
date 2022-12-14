import { INestApplication, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma-module/prisma.service';
import { SwaggerConfig } from './swaggerConfig/SwaggerConfig';
import * as cookieParser from 'cookie-parser'

@Injectable()
export class AppConfigService {
    constructor(private readonly swaggerConfig: SwaggerConfig) {

    }

    setUp(app: INestApplication) {
        this.swaggerConfig.setUp(app)
        app.use(cookieParser());
        const prismaService = app.get(PrismaService);
        prismaService.enableShutdownHooks(app);

    }
}