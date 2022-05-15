import { FormikProps, useFormik } from 'formik';
import { IAVAutomation, IAVAutomationCreatePayload, IAVAutomationUpdatePayload } from 'shared/interfaces/IAVAutomation';

import * as yup from 'yup';

interface Props {
  screenshot: { url?: string; file?: File };
  automationData?: IAVAutomation;
  onSubmit: (values: IAVAutomationCreatePayload, image?: File) => void;
}

export const useProgramSetupForm = ({ screenshot, automationData, onSubmit }: Props) => {
  const getDailyScheduleData = (dailySchedule: Pick<IAVAutomation, 'daily_schedule'>['daily_schedule']) => {
    const schedule: Pick<IAVAutomation, 'daily_schedule'>['daily_schedule'] = dailySchedule;

    for (const day in schedule) {
      if (
        !schedule[day]?.timeslot_start.includes('1990-01-01') ||
        !schedule[day]?.timeslot_end.includes('1990-01-01')
      ) {
        schedule[day].timeslot_start = `1990-01-01 ${schedule[day]?.timeslot_start}`;
        schedule[day].timeslot_end = `1990-01-01 ${schedule[day]?.timeslot_end}`;
      }
    }

    return schedule;
  };

  const AVAutomationSchema = yup.object().shape({
    anchors: yup.array().label('Anchors'),
    channel_obj: yup.string().label('Channel'),
    program_obj: yup.string().label('Program'),
    youtube_scrape_details: yup.object({
      youtube_url: yup.string().notRequired(),
      youtube_channel_filter: yup.string().notRequired(),
      youtube_channel_name: yup.string().notRequired(),
      youtube_last_upload_url: yup.string().notRequired(),
    }),
    facebook_scraper_details: yup.object({
      facebook_url: yup.string().notRequired(),
      facebook_last_upload_url: yup.string().notRequired(),
    }),
    local_recording_details: yup.object({
      local_recording_path: yup.string().required('Local Recording Path is required'),
    }),
    daily_schedule: yup.object({
      monday: yup.object({
        timeslot_start: yup.string().notRequired().nullable(),
        timeslot_end: yup.string().notRequired().nullable(),
      }),
      tuesday: yup.object({
        timeslot_start: yup.string().notRequired().nullable(),
        timeslot_end: yup.string().notRequired().nullable(),
      }),
      wednesday: yup.object({
        timeslot_start: yup.string().notRequired().nullable(),
        timeslot_end: yup.string().notRequired().nullable(),
      }),
      thursday: yup.object({
        timeslot_start: yup.string().notRequired().nullable(),
        timeslot_end: yup.string().notRequired().nullable(),
      }),
      friday: yup.object({
        timeslot_start: yup.string().notRequired().nullable(),
        timeslot_end: yup.string().notRequired().nullable(),
      }),
      saturday: yup.object({
        timeslot_start: yup.string().notRequired().nullable(),
        timeslot_end: yup.string().notRequired().nullable(),
      }),
      sunday: yup.object({
        timeslot_start: yup.string().notRequired().nullable(),
        timeslot_end: yup.string().notRequired().nullable(),
      }),
    }),
    setup: yup.object({
      machine_ip_address: yup.string().label('Machine IP Address').required(),
      minimum_article_length_in_seconds: yup.number().label('Minimum Article Length').required(),
      ocr_lang: yup.string().label('OCR Language').required(),
      on_off: yup.number().label('Status').required(),
      top_left_up: yup.string().label('Top Left'),
      top_left_down: yup.string().label('Bottom Left'),
      top_right_up: yup.string().label('Top Right'),
      top_right_down: yup.string().label('Bottom Right'),
    }),
    created_by: yup.string().notRequired(),
  });

  const initialValues: IAVAutomationCreatePayload | IAVAutomationUpdatePayload = {
    anchors: automationData ? automationData.anchors.map((anchor) => anchor._id) : [],
    channel_obj: automationData ? automationData.channel_details._id : '',
    program_obj: automationData ? automationData.program_details._id : '',
    youtube_scrape_details: automationData
      ? automationData.youtube_scrape_details
      : {
          youtube_url: '',
          youtube_channel_filter: '',
          youtube_channel_name: '',
          youtube_last_upload_url: '',
        },
    facebook_scraper_details: automationData
      ? automationData.facebook_scraper_details
      : {
          facebook_url: '',
          facebook_last_upload_url: '',
        },
    local_recording_details: automationData
      ? automationData.local_recording_details
      : {
          local_recording_path: '',
        },
    setup: automationData
      ? automationData.setup
      : {
          machine_ip_address: '192.168.3.188',
          minimum_article_length_in_seconds: 20,
          ocr_lang: 'eng',
          on_off: 1,
          top_left_up: '',
          top_left_down: '',
          top_right_up: '',
          top_right_down: '',
        },
    daily_schedule: automationData
      ? getDailyScheduleData(automationData.daily_schedule)
      : {
          monday: {
            timeslot_start: null,
            timeslot_end: null,
          },
          tuesday: {
            timeslot_start: null,
            timeslot_end: null,
          },
          wednesday: {
            timeslot_start: null,
            timeslot_end: null,
          },
          thursday: {
            timeslot_start: null,
            timeslot_end: null,
          },
          friday: {
            timeslot_start: null,
            timeslot_end: null,
          },
          saturday: {
            timeslot_start: null,
            timeslot_end: null,
          },
          sunday: {
            timeslot_start: null,
            timeslot_end: null,
          },
        },
  };

  const beforeSubmit = (values: IAVAutomationCreatePayload) => {
    const schedule = values.daily_schedule;

    if (schedule) {
      for (const day in schedule) {
        if (schedule[day].timeslot_start === null) {
          schedule[day].timeslot_start = '1990-01-01 00:00';
        }
        if (schedule[day].timeslot_end === null) {
          schedule[day].timeslot_end = '1990-01-01 00:00';
        }
      }
    }

    return {
      ...values,
      daily_schedule: schedule,
    };
  };

  const form: FormikProps<IAVAutomationCreatePayload> = useFormik<IAVAutomationCreatePayload>({
    initialValues,
    onSubmit: (values) => {
      const data = beforeSubmit(values);

      onSubmit(data, screenshot.file);
    },
    validationSchema: AVAutomationSchema,
    enableReinitialize: true,
  });

  return {
    form,
  };
};
