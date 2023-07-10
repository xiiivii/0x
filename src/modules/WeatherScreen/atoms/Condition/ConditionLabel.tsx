import React from 'react';

import { WeatherCondition } from '../../types/Weather';
import { getLabel } from './content';

type Props = {
  className?: string;
  value: WeatherCondition;
};

export const ConditionLabel = (props: Props) => {
  const { className, value } = props;

  return <span className={className}>{getLabel(value)}</span>;
};
