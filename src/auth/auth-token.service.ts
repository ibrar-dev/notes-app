import jwt from 'jsonwebtoken';
import { IAuthenticatedUserPayload } from './auth.types';
// import { ConfigService } from '../../config/config.service';

export const AuthTokenService = {
  verify: (token: string): Promise<IAuthenticatedUserPayload> => new Promise((resolve, reject) => {
    jwt.verify(token, 'navg8Key', (err, decoded) => {
      if (err) {
        return reject(err);
      }
      return resolve(decoded as IAuthenticatedUserPayload);
    });
  }),
  sign: (payload: IAuthenticatedUserPayload): string => jwt.sign(payload, 'navg8Key', {
    expiresIn: '3h',
  }),
};