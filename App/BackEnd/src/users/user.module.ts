import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ProfileModule } from './profiles/profiles.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [ProfileModule, RoleModule, AuthModule]
})
export class UserModule { }
