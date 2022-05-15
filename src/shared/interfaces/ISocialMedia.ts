export interface ISocialMedia {
  twitter: ITwitter;
  instagram: IInstagram;
  facebook: IFacebook;
  youtube: IYoutube;
  linkedin: ILinkedin;
  pinterest: IPinterest;
  flickr: IFlickr;
}

export interface ISocialMediaCommon {
  profile_url: string;
}

export interface ITwitter extends ISocialMediaCommon {
  follower_count: number;
  tweets_count: number;
}

export type IInstagram = ISocialMediaCommon;
export type IFacebook = ISocialMediaCommon;
export type IYoutube = ISocialMediaCommon;
export type ILinkedin = ISocialMediaCommon;
export type IPinterest = ISocialMediaCommon;
export type IFlickr = ISocialMediaCommon;
