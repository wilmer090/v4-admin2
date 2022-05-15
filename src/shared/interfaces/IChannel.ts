import { ICommonResponsePayload } from './ICommon';
import { ISocialMedia } from './ISocialMedia';

export interface IRank {
  global_rank?: number;
  local_rank?: number;
  domain_ranking?: number;
}

export interface IChannelContactInformation {
  address: {
    street_address1: string | null;
    street_address2: string | null;
  };
  email: string | null;
  landline: string | null;
  phone: string | null;
}

export interface IChannel {
  _id: string;
  channel_name: string;
  description: string;
  social_media_links: ISocialMedia;
  alexa_rankings: IRank;
  similar_web: IRank;
  moz_rankings: IRank;
  website_urls: string[];
  contact_information: IChannelContactInformation;
  is_verified: boolean;
  logo: string;
  country: string;
}

// REQUEST
export interface IChannelRequestPayload {
  _id?: string;
  media_source_name?: string;
  channel_name?: string;
}

// RESPONSE
export interface IChannelResponsePayload extends ICommonResponsePayload {
  data: IChannel[];
}
