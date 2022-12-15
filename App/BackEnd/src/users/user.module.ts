import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ProfileModule } from './profiles/profiles.module';
import { RoleModule } from './role/role.module';


@Global()
@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [ProfileModule, RoleModule,],
  exports: [UserService]
})
export class UserModule { }
