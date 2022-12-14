import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './Strategies/GoogleStrategy';
import { JwtStrategy } from './Strategies/JwtStrategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Global()
@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'Echo-Plant',
            signOptions: {
                expiresIn: '60s',
            }
        })],
    providers: [GoogleStrategy, JwtStrategy, AuthService,],
    exports: [AuthService]
})
export class AuthModule { }
