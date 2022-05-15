export const getShowTotal = (total: number, range: [number, number]) => {
  return `${range[0].toLocaleString()}-${range[1].toLocaleString()} of ${total.toLocaleString()} results`;
};
