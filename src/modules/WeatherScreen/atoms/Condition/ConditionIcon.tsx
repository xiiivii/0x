import React from 'react';

import { WeatherCondition } from '../../types/Weather';
import { getIcon, getNightIcon } from './content';

type Props = {
  className?: string;
  isNight?: boolean;
  value: WeatherCondition;
};

export const ConditionIcon = (props: Props) => {
  const { className, isNight = false, value } = props;

  const icon = isNight ? getNightIcon(value) : getIcon(value);

  /**
   * Note: I've used contrast because images are not really consistent
   * colors-wise, so I tweaked them a bit just to appear more beautiful
   */
  const style = { filter: 'contrast(2)' };

  return (
    <img
      className={className}
      style={style}
      src={icon.url}
      width={icon.width}
      height={icon.height}
      alt={icon.alt}
    />
  );
};
