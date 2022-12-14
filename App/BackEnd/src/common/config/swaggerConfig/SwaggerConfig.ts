import { INestApplication, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Injectable()
export class SwaggerConfig {
    constructor(private readonly config: ConfigService) {
    }

    setUp(app: INestApplication) {
        const appTitle = this.config.get<string>("APP-TITLE") || 'Echo-Plant'
        const appVersion = this.config.get<string>("VERSION") || '0.1'
        const host = this.config.get<string>("HOST") || 'localhost'
        const port = this.config.get<number>("PORT") || '4000'
        const swaggerDocEndPoint = this.config.get<string>("SWG_ENDPOINT") || "api/docs"

        const description = `${appTitle} REST Api`

        const swaggerConfig = new DocumentBuilder()
            .setTitle(appTitle)
            .setDescription(description)
            .setVersion(appVersion)
            .addServer(`${host}:${port}`, description)
            .build();

        const document = SwaggerModule.createDocument(app, swaggerConfig);
        SwaggerModule.setup(swaggerDocEndPoint, app, document);
    }

}
