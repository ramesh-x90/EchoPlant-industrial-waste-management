import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './Strategies/GoogleStrategy';
import { JwtStrategy } from './Strategies/JwtStrategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

@Global()
@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'Echo-Plant',
        })],
    controllers: [AuthController],
    providers: [GoogleStrategy, JwtStrategy, AuthService,],
    exports: [AuthService]
})
export class AuthModule { }
