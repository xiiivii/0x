import React from 'react';

import { VisuallyHidden } from 'src/components/VisuallyHidden';

import { ConditionIcon, ConditionLabel } from '../../atoms/Condition';
import { Temperature } from '../../atoms/Temperature';
import type { Weather } from '../../types/Weather';

import styles from './HourlyForecast.module.css';

type Props = {
  forecasts: Weather['hourlyForecast'];
};

export const HourlyForecast = (props: Props) => {
  const { forecasts } = props;
  return (
    <ul className={styles.list}>
      {forecasts.map((forecast) => (
        <li key={forecast.id} className={styles.item}>
          <div className={styles.label}>{forecast.label}</div>

          <div className={styles.condition}>
            <VisuallyHidden>
              <ConditionLabel value={forecast.condition} />
            </VisuallyHidden>

            <ConditionIcon
              className={styles.conditionIcon}
              isNight={forecast.isNight}
              value={forecast.condition}
            />
          </div>

          <Temperature value={forecast.temperature} />
        </li>
      ))}
    </ul>
  );
};
