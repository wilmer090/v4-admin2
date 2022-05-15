import { ICommonRequestPayload, ICommonResponsePayload } from './ICommon';

export interface IMultiplier {
  _id: string;
  multiplier_name: string;
  multiplier_value: number;
  publication_page_no: string;
}

export interface IMultiplierRequestPayload extends ICommonRequestPayload {
  multiplier_media_type?: string;
}

export interface IMultiplierResponsePayload extends ICommonResponsePayload {
  tonalities: IMultiplier[];
}
