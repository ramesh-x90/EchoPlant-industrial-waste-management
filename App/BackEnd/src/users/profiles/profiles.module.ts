import { Module } from '@nestjs/common';
import { ProfileService } from './profiles.service';
import { ProfileController } from './profiles.controller';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule { }
