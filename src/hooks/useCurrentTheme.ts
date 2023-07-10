import { useEffect, useState } from 'react';

const enum ThemeName {
  Morning = 'morning',
  Day = 'day',
  Evening = 'evening',
  Night = 'night',
}

type Gradient = { from: string; to: string };

const GradientByTheme: Record<ThemeName, Gradient> = {
  [ThemeName.Morning]: { from: '#81c5e6', to: '#dc927f' },
  [ThemeName.Day]: { from: '#4982ad', to: '#c3d8e7' },
  [ThemeName.Evening]: { from: '#6f6d8c', to: '#daaba8' },
  [ThemeName.Night]: { from: '#011e33', to: '#625c73' },
} as const;

const determineThemeName = (hour: number) => {
  if (hour <= 5) {
    return ThemeName.Night;
  }

  if (hour <= 11) {
    return ThemeName.Morning;
  }

  if (hour <= 17) {
    return ThemeName.Day;
  }

  if (hour <= 21) {
    return ThemeName.Evening;
  }

  return ThemeName.Night;
};

const determineGradient = (theme: ThemeName) => GradientByTheme[theme];

export const useCurrentTheme = (hour: number) => {
  const [currentTheme, setCurrentTheme] = useState<{
    color: string;
    gradient: string;
  }>({
    color: '',
    gradient: '',
  });

  useEffect(() => {
    const themeName = determineThemeName(hour);
    const gradient = determineGradient(themeName);

    setCurrentTheme({
      color: gradient.from,
      gradient: `linear-gradient(to bottom, ${gradient.from}, ${gradient.to})`,
    });
  }, [hour]);

  return currentTheme;
};
