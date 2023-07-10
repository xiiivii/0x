export const checkIfNight = (date: string) => {
  const hours = new Date(date).getHours();

  return hours > 20 || hours < 6;
};
