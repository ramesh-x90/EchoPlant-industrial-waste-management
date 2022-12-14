import { Module } from '@nestjs/common';
import { TransportServiceService } from './transport-service.service';
import { TransportServiceController } from './transport-service.controller';
import { AdminModule } from './admin/admin.module';
import { StuffModule } from './stuff/stuff.module';
import { CarriersModule } from './carriers/carriers.module';
import { CarrierOwnersModule } from './carrier-owners/carrier-owners.module';

@Module({
  controllers: [TransportServiceController],
  providers: [TransportServiceService],
  imports: [AdminModule, StuffModule, CarriersModule, CarrierOwnersModule]
})
export class TransportServiceModule { }

