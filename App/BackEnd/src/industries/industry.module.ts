import { Module } from '@nestjs/common';
import { IndustryService } from './industry.service';
import { IndustryController } from './industry.controller';
import { AdminModule } from './admin/admin.module';
import { StuffModule } from './stuff/stuff.module';
import { WastePickupRequestModule } from './waste-pickup-request/waste-pickup-request.module';

@Module({
  controllers: [IndustryController],
  providers: [IndustryService],
  imports: [AdminModule, StuffModule, WastePickupRequestModule]
})
export class IndustryModule {}
