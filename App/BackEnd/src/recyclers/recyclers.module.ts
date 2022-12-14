import { Module } from '@nestjs/common';
import { RecyclersService } from './recyclers.service';
import { RecyclersController } from './recyclers.controller';
import { AdminModule } from './admin/admin.module';
import { StuffModule } from './stuff/stuff.module';
import { AcceptedWasteModule } from './accepted-waste/accepted-waste.module';

@Module({
  controllers: [RecyclersController],
  providers: [RecyclersService],
  imports: [AdminModule, StuffModule, AcceptedWasteModule]
})
export class RecyclersModule {}
