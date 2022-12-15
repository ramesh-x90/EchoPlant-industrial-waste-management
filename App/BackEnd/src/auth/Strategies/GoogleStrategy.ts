import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';
import { UserProfile } from '../interfaces/userProfile.interface.';
import { AppConfigService } from 'src/common/config/app.config.service';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

    constructor(private readonly appConfigService: AppConfigService) {
        super({
            clientID: appConfigService.getClientID(),
            clientSecret: appConfigService.getClientSecret(),
            callbackURL: appConfigService.getRedirectUri(),
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback): Promise<any> {
        const { name, emails, photos } = profile
        const user: UserProfile = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value
        }
        done(null, user);
    }
}