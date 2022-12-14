import { Module } from '@nestjs/common';
import { WareHousesService } from './ware-houses.service';
import { WareHousesController } from './ware-houses.controller';
import { AdminModule } from './admin/admin.module';
import { StuffModule } from './stuff/stuff.module';
import { StocksModule } from './stocks/stocks.module';

@Module({
  controllers: [WareHousesController],
  providers: [WareHousesService],
  imports: [AdminModule, StuffModule, StocksModule]
})
export class WareHousesModule {}
