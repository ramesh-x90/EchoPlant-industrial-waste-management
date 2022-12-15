import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { RoleModule } from './role/role.module';
import { StoreModule } from './store/store.module';
import { IndustryModule } from './industries/industry.module';
import { RecyclersModule } from './recyclers/recyclers.module';
import { WareHousesModule } from './ware-houses/ware-houses.module';
import { CarrierOwnersModule } from './transport-services/carrier-owners/carrier-owners.module';
import { WasteModule } from './waste/waste.module';
import { RawMaterialsModule } from './raw-materials/raw-materials.module';
import { PrismaModuleModule } from './common/prisma-module/prisma-module.module';
import { AppConfig } from './common/config/config.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,


    UserModule,
    RoleModule,
    StoreModule,
    IndustryModule,
    RecyclersModule,
    WareHousesModule,
    CarrierOwnersModule,
    WasteModule,
    RawMaterialsModule,
    PrismaModuleModule,

    // application configuration module
    AppConfig,

  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
