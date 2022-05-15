import { ICommonResponsePayload } from './ICommon';

export interface IUser {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  token: string;
}
export interface ILoginRequestPayload {
  email: string;
  password: string;
}

export interface ILoginResponsePayload extends ICommonResponsePayload {
  data: IUser[];
}

export interface ILogoutResponsePayload {
  success: boolean;
}
