import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';

@Module({
  controllers: [StuffController],
  providers: [StuffService]
})
export class StuffModule {}
