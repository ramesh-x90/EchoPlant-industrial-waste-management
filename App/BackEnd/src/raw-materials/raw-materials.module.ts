import { Module } from '@nestjs/common';
import { RawMaterialsService } from './raw-materials.service';
import { RawMaterialsController } from './raw-materials.controller';

@Module({
  controllers: [RawMaterialsController],
  providers: [RawMaterialsService]
})
export class RawMaterialsModule {}
