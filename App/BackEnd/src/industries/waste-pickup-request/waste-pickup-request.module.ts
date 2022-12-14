import { Module } from '@nestjs/common';
import { WastePickupRequestService } from './waste-pickup-request.service';
import { WastePickupRequestController } from './waste-pickup-request.controller';

@Module({
  controllers: [WastePickupRequestController],
  providers: [WastePickupRequestService]
})
export class WastePickupRequestModule {}
