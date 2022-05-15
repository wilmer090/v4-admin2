import { addHours, format as fnsFormat } from 'date-fns';
import { CONFIG } from 'shared/config/config';

export const getConvertedDate = (date: Date) => {
  return addHours(new Date(date), CONFIG.DATE_ADD_HOUR);
};

export const getFormattedDate = (date: Date, format?: string) => {
  return fnsFormat(getConvertedDate(date), format || 'eee, LLL dd, yyyy hh:mm a');
};
