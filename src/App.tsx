import React from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { useCurrentHour } from './hooks/useCurrentHour';
import { useCurrentTheme } from './hooks/useCurrentTheme';
import { WeatherScreen } from './modules/WeatherScreen';

import styles from './App.module.css';

export const App = () => {
  const currentHour = useCurrentHour();
  const currentTheme = useCurrentTheme(currentHour);

  return (
    <HelmetProvider>
      <main className={styles.root} style={{ backgroundImage: currentTheme.gradient }}>
        <Helmet>
          <meta name="theme-color" content={currentTheme.color} />
        </Helmet>

        <WeatherScreen />
      </main>
    </HelmetProvider>
  );
};
