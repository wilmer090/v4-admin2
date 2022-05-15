import { ICommonRequestPayload, ICommonResponsePayload } from './ICommon';

export interface IAVAutomationFacebookScraper {
  facebook_url: string;
  facebook_last_upload_url: string;
}

export interface IAVAutomationYoutubeScraper {
  youtube_channel_name: string;
  youtube_url: string;
  youtube_channel_filter: string;
  youtube_last_upload_url: string;
}

export interface IAVAutomationDailyScheduleSlot {
  timeslot_start: string | null;
  timeslot_end: string | null;
}

export interface IAVAutomationDailySchedule {
  monday?: IAVAutomationDailyScheduleSlot;
  tuesday?: IAVAutomationDailyScheduleSlot;
  wednesday?: IAVAutomationDailyScheduleSlot;
  thursday?: IAVAutomationDailyScheduleSlot;
  friday?: IAVAutomationDailyScheduleSlot;
  saturday?: IAVAutomationDailyScheduleSlot;
  sunday?: IAVAutomationDailyScheduleSlot;
}

export interface IAVAutomationSetupDetails {
  top_left_up?: string;
  top_left_down?: string;
  top_right_up?: string;
  top_right_down?: string;
  ocr_lang: string;
  on_off?: number;
  minimum_article_length_in_seconds: number;
  machine_ip_address: string;
}

export interface IAVAutomationRequestPayload extends ICommonRequestPayload {
  _id?: string;
  channel_obj_id?: string;
  program_obj_id?: string;
  from?: string;
  to?: string;
  timeslot_start?: string;
  timeslot_end?: string;
  media_source_name?: string;
}

export interface IAVAutiomationUser {
  _id:
    | string
    | {
        $oid: string;
      };
  first_name: string;
  last_name: string;
  [key: string]: any;
}

// RESPONSE PAYLOAD
export interface IAVAutomationResponsePayload extends ICommonResponsePayload {
  data: IAVAutomation[];
}

// CREATE PAYLOAD
export interface IAVAutomationCreatePayload {
  anchors: any;
  channel_obj: string;
  program_obj: string;
  local_recording_details: {
    local_recording_path: string;
  };
  daily_schedule: IAVAutomationDailySchedule;
  facebook_scraper_details: IAVAutomationFacebookScraper;
  youtube_scrape_details: IAVAutomationYoutubeScraper;
  setup: IAVAutomationSetupDetails;
  created_by?: string;
}

// UPDATE PAYLOAD
export interface IAVAutomationUpdatePayload extends IAVAutomationCreatePayload {
  _id: string;
  updated_by?: string;
}

// DELETE PAYLOAD
export interface IAVAutomationDeletePayload {
  _id: string;
}

// AUDIO VIDEO AUTOMATION
export interface IAVAutomation {
  _id: string;
  channel_details: {
    _id: string;
    channel_name: string;
  };
  program_details: {
    _id: string;
    program_name: string;
    program_cost: number;
  };
  anchors: Array<{
    _id: string;
    author_name: string;
    is_parent: boolean;
    author_tag: string;
    is_verified: boolean;
  }>;
  daily_schedule: IAVAutomationDailySchedule;
  local_recording_details: {
    local_recording_path: string;
  };
  facebook_scraper_details: IAVAutomationFacebookScraper;
  youtube_scrape_details: IAVAutomationYoutubeScraper;
  setup: IAVAutomationSetupDetails;
  screenshot_url: string;
  date_created?: string;
  date_updated?: string;
  created_by?: IAVAutiomationUser[];
  updated_by?: IAVAutiomationUser[];
}
