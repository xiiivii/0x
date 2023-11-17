import { useEffect, useState } from 'react';

const getActualHour = () => new Date().getHours();

const intervalDelay = 60 * 1000;

export const useCurrentHour = () => {
  const [currentHour, setCurrentHour] = useState<number>(() => getActualHour());

  useEffect(() => {
    const interval = setInterval(() => {
      const actualHour = getActualHour();

      if (actualHour === currentHour) {
        return;
      }

      setCurrentHour(actualHour);
    }, intervalDelay);

    return () => clearInterval(interval);
  }, [currentHour]);

  return currentHour;
};
