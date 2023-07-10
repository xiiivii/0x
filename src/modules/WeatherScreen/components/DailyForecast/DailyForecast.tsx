import React from 'react';

import cls from 'classnames';

import { VisuallyHidden } from 'src/components/VisuallyHidden';

import { ConditionIcon, ConditionLabel } from '../../atoms/Condition';
import { Range } from '../../atoms/Range';
import { Temperature } from '../../atoms/Temperature';
import type { Weather } from '../../types/Weather';

import styles from './DailyForecast.module.css';

const PRECIPITATION_PROBABILITY_THRESHOLD = 10;

type Props = {
  forecasts: Weather['dailyForecast'];
  currentTemperature: number;
  periodTemperatureRange: Weather['periodTemperatureRange'];
};

export const DailyForecast = (props: Props) => {
  const { forecasts, currentTemperature, periodTemperatureRange } = props;

  return (
    <table className={styles.root}>
      <tbody>
        {forecasts.map((forecast, index) => (
          <tr key={forecast.id} className={styles.row}>
            <td className={cls(styles.cell, styles.cellLabel)}>{forecast.label}</td>

            <td className={cls(styles.cell, styles.cellConditions)}>
              <div className={styles.condition}>
                <VisuallyHidden>
                  Weather condition - {<ConditionLabel value={forecast.condition} />}
                </VisuallyHidden>

                <ConditionIcon className={styles.conditionIcon} value={forecast.condition} />

                {forecast.precipitation > PRECIPITATION_PROBABILITY_THRESHOLD && (
                  <div className={styles.conditionPrecipitation}>
                    <VisuallyHidden>Precipitation probability -</VisuallyHidden>
                    {forecast.precipitation}%
                  </div>
                )}
              </div>
            </td>

            <td className={styles.cell}>
              <VisuallyHidden>Lowest temperature -</VisuallyHidden>
              <Temperature className={styles.minTemperature} value={forecast.minTemperature} />
            </td>

            <td className={cls(styles.cell, styles.cellRange)}>
              <Range
                className={styles.range}
                hasCurrentValue={index === 0}
                currentValue={currentTemperature}
                localMinValue={forecast.minTemperature}
                localMaxValue={forecast.maxTemperature}
                globalMinValue={periodTemperatureRange.minTemperature}
                globalMaxValue={periodTemperatureRange.maxTemperature}
              />
            </td>

            <td className={styles.cell}>
              <VisuallyHidden>Highest temperature -</VisuallyHidden>
              <Temperature className={styles.maxTemperature} value={forecast.maxTemperature} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
