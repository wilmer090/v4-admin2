export const CONFIG = {
  isDevelopment: process.env.NODE_ENV === 'development',
  NODE_ENV: process.env.NODE_ENV,
  API_URL: process.env.REACT_APP_API_URL,
  ACCESS_TOKEN: process.env.REACT_APP_API_ACCESS_TOKEN,
  ACCESS_SECRET: process.env.REACT_APP_API_ACCESS_TOKEN_SECRET || '',
  BASENAME: process.env.PUBLIC_URL,
  DATE_ADD_HOUR: Number(process.env.REACT_APP_ADD_HOUR) || 0,
};
