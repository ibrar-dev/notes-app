import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            clientID: '952942159561-qudnbd54kcrs56tj4dv40gumpqftdfsm.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/google/redirect',
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { name, emails, photos } = profile
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        }
        done(null, user);
    }
}