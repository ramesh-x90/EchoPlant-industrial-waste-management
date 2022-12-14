import { Module } from '@nestjs/common';
import { SwaggerConfig } from './swaggerConfig/SwaggerConfig';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './app.config.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [SwaggerConfig, AppConfigService],
  exports: [SwaggerConfig]
})
export class AppConfig { }
