import { format as dateFormat } from 'date-fns';

export const isDateValid = (date: any, format: string) => {
  try {
    return dateFormat(new Date(date || ''), format);
  } catch (e) {
    return date;
  }
};
