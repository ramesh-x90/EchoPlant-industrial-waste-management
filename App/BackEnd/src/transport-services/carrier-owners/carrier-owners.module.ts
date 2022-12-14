import { Module } from '@nestjs/common';
import { CarrierOwnersService } from './carrier-owners.service';
import { CarrierOwnersController } from './carrier-owners.controller';

@Module({
  controllers: [CarrierOwnersController],
  providers: [CarrierOwnersService]
})
export class CarrierOwnersModule {}
