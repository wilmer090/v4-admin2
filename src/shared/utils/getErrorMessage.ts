export const getErrorMessage = (touch: boolean | any, error: string | any) => {
  return touch && error ? error : '';
};
