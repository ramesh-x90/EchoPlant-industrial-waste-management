import { Module } from '@nestjs/common';
import { AcceptedWasteService } from './accepted-waste.service';
import { AcceptedWasteController } from './accepted-waste.controller';

@Module({
  controllers: [AcceptedWasteController],
  providers: [AcceptedWasteService]
})
export class AcceptedWasteModule {}
