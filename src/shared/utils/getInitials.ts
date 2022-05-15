export const getInitials = (name: string) => {
  const splittedName = name.split(' ');
  return splittedName[0][0]?.toUpperCase();
};
