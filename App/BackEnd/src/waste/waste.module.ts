import { Module } from '@nestjs/common';
import { WasteService } from './waste.service';
import { WasteController } from './waste.controller';

@Module({
  controllers: [WasteController],
  providers: [WasteService]
})
export class WasteModule {}
