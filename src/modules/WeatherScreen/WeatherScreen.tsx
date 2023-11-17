import React from 'react';

import cls from 'classnames';

import { Button } from 'src/components/Button';
import { Panel } from 'src/components/Panel';
import { Skeleton } from 'src/components/Skeleton';
import { VisuallyHidden } from 'src/components/VisuallyHidden';

import { RefreshButton } from './atoms/RefreshButton';
import { DailyForecast } from './components/DailyForecast';
import { Header } from './components/Header';
import { HourlyForecast } from './components/HourlyForecast';
import { useWeatherData } from './hooks/useWeatherData';

import styles from './WeatherScreen.module.css';

export const WeatherScreen = () => {
  const { location, weather, error, fetch } = useWeatherData();

  if (error) {
    return (
      <article className={styles.error}>
        <h1>Something went wrong</h1>
        <p>Please try again</p>
        <Button className={styles.errorButton} onClick={fetch}>
          Reload weather data
        </Button>
      </article>
    );
  }

  if (!location || !weather) {
    return (
      <article className={styles.root}>
        <VisuallyHidden as="h1">Weather data is loading. Please, wait...</VisuallyHidden>
        <Skeleton className={cls(styles.skeleton, styles.header)} />
        <Skeleton className={cls(styles.skeleton, styles.panel)} />
        <Skeleton className={cls(styles.skeleton, styles.panel)} />
      </article>
    );
  }

  return (
    <article className={styles.root}>
      <RefreshButton className={styles.refreshButton} onClick={fetch} />

      <Header
        className={styles.header}
        location={location}
        temperature={weather.nowForecast.temperature}
        condition={weather.nowForecast.condition}
        minTemperature={weather.todayTemperatureRange.minTemperature}
        maxTemperature={weather.todayTemperatureRange.maxTemperature}
      />

      <Panel className={styles.panel}>
        <Panel.Title>Hourly forecast</Panel.Title>
        <Panel.Content isScrollableHorizontally>
          <HourlyForecast forecasts={weather.hourlyForecast} />
        </Panel.Content>
      </Panel>

      <Panel className={styles.panel}>
        <Panel.Title>10-day forecast</Panel.Title>
        <Panel.Content>
          <DailyForecast
            forecasts={weather.dailyForecast}
            currentTemperature={weather.nowForecast.temperature}
            periodTemperatureRange={weather.periodTemperatureRange}
          />
        </Panel.Content>
      </Panel>
    </article>
  );
};
