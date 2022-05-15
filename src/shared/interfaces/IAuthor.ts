import { ICommon, ICommonRequestPayload, ICommonResponsePayload } from './ICommon';

export interface IAuthor extends ICommon {
  aut_id: number;
  author_name: string;
  author_profile_pic?: string;
  author_publications: { publication_name: string }[];
  author_reputation_score: number;
  author_score: number[];
  profile_pic?: string;
  author_tag: string;
  contact_information: {
    contact_email: string;
    contact_phone: string;
  };
  country?: string;
  is_verified?: boolean;
  social_media_links?: {
    facebook: { profile_url: string };
    instagram: { profile_url: string };
    linkedin: { profile_url: string };
    social_links: { profile_url: string };
    twitter: { profile_url: string; follower_count: number; tweets_count: number };
  };
  _id: string;
}

export interface IAuthorResponsePayload extends ICommonResponsePayload {
  data: any;
}

export interface IAuthorRequestPayload extends ICommonRequestPayload {
  author_name?: string;
  author_tag?: string;
  is_verified?: boolean | string;
  is_parent?: boolean;
  sort?: string;
  social_media_links?: string[];
  author_publications?: string[];
}

export interface IAuthorCreatePayload {
  author_name: string;
  contact_email?: string;
  author_profile_pic?: string;
}

// DELETE PAYLOAD
export interface IAuthorDeletePayload {
  _id: string;
}
