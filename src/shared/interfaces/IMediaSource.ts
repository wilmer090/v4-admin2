import { ICommonResponsePayload } from './ICommon';

export interface IMediaSource {
  _id: string;
  media_source_name: string;
  media_source_type_flag: string;
  mty_id: number;
}

export interface IMediaSourceResponsePayload extends ICommonResponsePayload {
  data: IMediaSource[];
}
