import React from 'react';

import cls from 'classnames';

import { VisuallyHidden } from 'src/components/VisuallyHidden';

import { ConditionLabel } from '../../atoms/Condition';
import { Temperature } from '../../atoms/Temperature';
import { WeatherCondition } from '../../types/Weather';

import styles from './Header.module.css';

type Props = {
  className?: string;

  location: string;

  temperature: number;
  condition: WeatherCondition;

  minTemperature: number;
  maxTemperature: number;
};

export const Header = (props: Props) => {
  const {
    className,

    location,

    temperature,
    condition,

    minTemperature,
    maxTemperature,
  } = props;

  return (
    <header className={cls(styles.root, className)}>
      <h1 className={styles.title}>
        <VisuallyHidden>Current location is</VisuallyHidden>
        {location}
      </h1>

      <VisuallyHidden>
        The temperature is {<Temperature value={temperature} />} with the highest as{' '}
        {<Temperature value={maxTemperature} />} and lowest as{' '}
        {<Temperature value={minTemperature} />}, while condition is{' '}
        {<ConditionLabel value={condition} />}
      </VisuallyHidden>

      <div aria-hidden={true}>
        <Temperature className={styles.temperature} value={temperature} />
        <ConditionLabel className={styles.condition} value={condition} />
        <span>
          H:
          <Temperature value={maxTemperature} />
        </span>
        &nbsp;
        <span>
          L:
          <Temperature value={minTemperature} />
        </span>
      </div>
    </header>
  );
};
