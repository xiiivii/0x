export const formatHours = (date: string) => {
  return new Date(date).toLocaleTimeString(navigator.language, {
    hour: 'numeric',
  });
};
