import sign from 'jwt-encode';
import { CONFIG } from 'shared/config/config';
import { IUser } from 'shared/interfaces/IAuth';
import { ls } from './ls';

export const transformPayload = <T>(payload?: T): string => {
  const user = ls.get('user') as IUser;
  const data = {
    ...payload,
    access_token: user?.token,
  };
  const jwt = sign(data, CONFIG.ACCESS_SECRET);
  return jwt;
};
