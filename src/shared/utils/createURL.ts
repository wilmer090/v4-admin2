export const createURL = (link: string) => {
  if (!link) return '';
  return `https://${link}`;
};
