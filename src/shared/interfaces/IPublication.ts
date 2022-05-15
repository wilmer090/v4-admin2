import { ICommon, ICommonRequestPayload, ICommonResponsePayload } from './ICommon';
import { IMediaSource } from './IMediaSource';
import { IMultiplier } from './IMultiplier';

export interface IPublication extends ICommon {
  _id: string;
  publisher_name: string;
  description?: string;
  country: string;
  media_source: IMediaSource[];
  logo: string;
  website_urls: string[];
  pub_reputation_score: number;
  pub_activity_score: number;
  alexa_rankings: {
    global_rank: string;
    local_rank: string;
  };
  similar_web: {
    global_rank: string;
    local_rank: string;
  };
  contact_information: {
    address: {
      street_address1: string;
      street_address2: string;
    };
    email: string;
    landline: string;
    phone: string;
  };
  pub_col_cm_modified: string;
  pub_id: number;
  media_outlet_type: string | null;
  publication_page: Partial<IMultiplier>[];
  pub_cost: {
    pco_circulation: number;
    pco_weekend_circulation: number;
    pco_price_per_colcm: number;
    pco_weekend_colcm: number;
    pco_whole_page_bw: number;
    pco_whole_page_1clr: number;
    pco_whole_page_2clr: number;
    pco_whole_page_3clr: number;
    pco_weekend_whole_page_bw: number;
    pco_weekend_whole_page_1clr: number;
    pco_weekend_whole_page_2clr: number;
    pco_weekend_whole_page_3clr: number;
    pco_extended_fix_rate: number;
  };
  social_media_links: {
    twitter: {
      profile_url?: string;
    };
    instagram: {
      profile_url?: string;
    };
    linkenin: {
      profile_url?: string;
    };
    facebook: {
      profile_url?: string;
    };
    youtube: {
      profile_url?: string;
    };
    pinterest: {
      profile_url?: string;
    };
    flickr: {
      profile_url?: string;
    };
  };

  is_verified: boolean;
}

export interface IPublicationResponsePayload extends ICommonResponsePayload {
  data: IPublication[];
}
export interface IPublicationRequestPayload extends ICommonRequestPayload {
  page_size?: number;
  page_number?: number;
  sort?: string;
  publisher_name?: string;
  media_sources?: string[];
  website_urls?: string[];
  social_media_links?: string[];
}

export interface IPublicationCreatePayload {
  publisher_name: string;
  description?: string;
  country: string;
  media_source_name: string;
  contact_information: {
    email?: string | null;
    landline?: string | null;
    phone?: string | null;
    address: {
      street_address1?: string | null;
      street_address2?: string | null;
    };
  };
  publication_page: Partial<IMultiplier>[];
  website_urls?: string[];
  social_media_links: string[];
  pub_cost: {
    pco_circulation: number;
    pco_weekend_circulation: number;
    pco_price_per_colcm: number;
    pco_weekend_colcm: number;
    pco_whole_page_bw: number;
    pco_whole_page_1clr: number;
    pco_whole_page_2clr: number;
    pco_whole_page_3clr: number;
    pco_weekend_whole_page_bw: number;
    pco_weekend_whole_page_1clr: number;
    pco_weekend_whole_page_2clr: number;
    pco_weekend_whole_page_3clr: number;
    pco_extended_fix_rate: number;
  };
  // time_slots: {
  //   timeslot_name?: string;
  //   timeslot_cost?: string;
  // };
  // mutlipliers: {
  //   multiplier_name?: string;
  //   multiplier_value?: string;
  //   multiplier_media_type?: string;
  // };
  is_verified?: boolean;
  created_by?: string;
}

export interface IPublicationUpdatePayload {
  _id?: string;
  publisher_name?: string;
  description?: string;
  country?: string;
  media_source_name?: string;
  contact_information?: {
    email?: string | null;
    landline?: string | null;
    phone?: string | null;
    address: {
      street_address1?: string | null;
      street_address2?: string | null;
    };
  };
  publication_page?: Partial<IMultiplier>[];
  website_urls?: string[];
  social_media_links?: string[];
  pub_cost?: {
    pco_circulation: number;
    pco_weekend_circulation: number;
    pco_price_per_colcm: number;
    pco_weekend_colcm: number;
    pco_whole_page_bw: number;
    pco_whole_page_1clr: number;
    pco_whole_page_2clr: number;
    pco_whole_page_3clr: number;
    pco_weekend_whole_page_bw: number;
    pco_weekend_whole_page_1clr: number;
    pco_weekend_whole_page_2clr: number;
    pco_weekend_whole_page_3clr: number;
    pco_extended_fix_rate: number;
  };
  // time_slots?: {
  //   timeslot_name?: string;
  //   timeslot_cost?: string;
  // };
  // mutlipliers: {
  //   multiplier_name?: string;
  //   multiplier_value?: string;
  //   multiplier_media_type?: string;
  // };
  is_verified?: boolean;
  updated_by?: string;
}

export interface IDeletePublicationPayload {
  _id: string;
}
