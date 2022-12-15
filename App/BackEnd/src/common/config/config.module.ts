import { Global, Module } from '@nestjs/common';
import { SwaggerConfig } from './swaggerConfig/SwaggerConfig';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './app.config.service';


@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [SwaggerConfig, AppConfigService],
  exports: [SwaggerConfig, AppConfigService]
})
export class AppConfig { }
