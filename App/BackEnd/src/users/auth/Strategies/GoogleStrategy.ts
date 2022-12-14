import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';
import { UserProfile } from '../interfaces/userProfile.interface.';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

    constructor() {
        super({
            clientID: "963758742959-1eg7o6ikdfif17q6niibmad1drlllkes.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: 'http://localhost:4000/api/users/auth/google',
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