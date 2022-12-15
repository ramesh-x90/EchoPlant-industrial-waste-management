import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: (req: Request) => {
                return req.cookies['_access_token']
            },
            ignoreExpiration: false,
            secretOrKey: 'Echo-Plant',
        });
    }

    async validate(payload: BaseUserAuthJwtPayLoad) {
        return payload;
    }
}