import { IUser } from './IAuth';

export interface ICommon {
  created_by: IUser | null;
  updated_by: IUser | null;
  date_created: Date | null;
  date_updated: Date | null;
}

export interface ICommonRequestPayload {
  page_size?: number;
  page_number?: number;
  limit?: number;
  page?: number;
  sort?: string;
}

export interface ICommonResponsePayload {
  next?: number;
  number_of_pages?: number;
  previous?: number;
  meta?: {
    pagination: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
}
