export const formatWeekDay = (date: string) => {
  return new Date(date).toLocaleDateString(navigator.language, {
    weekday: 'short',
  });
};
