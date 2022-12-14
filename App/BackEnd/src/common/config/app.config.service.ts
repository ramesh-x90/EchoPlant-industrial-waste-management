import { INestApplication, Injectable } from '@nestjs/common'
import { SwaggerConfig } from './swaggerConfig/SwaggerConfig';

@Injectable()
export class AppConfigService {
    constructor(private readonly swaggerConfig: SwaggerConfig) {

    }

    setUp(app: INestApplication) {
        this.swaggerConfig.setUp(app)
    }
}