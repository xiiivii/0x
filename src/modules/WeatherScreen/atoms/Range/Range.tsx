import React from 'react';

import cls from 'classnames';

import styles from './Range.module.css';

const GRADIENT_MIN_VALUE = -40;
const GRADIENT_MAX_VALUE = 55;

const getRangeValueStyle = ({
  minValue,
  maxValue,
  fullValue,
}: {
  minValue: number;
  maxValue: number;
  fullValue: number;
}) => {
  const left = (minValue / fullValue) * 100;
  const right = (1 - maxValue / fullValue) * 100;

  return { clipPath: `inset(0% ${right}% 0% ${left}% round var(--local-height))` };
};

const getCurrentValueStyle = ({
  currentValue,
  fullValue,
}: {
  currentValue: number;
  fullValue: number;
}) => {
  const left = (currentValue / fullValue) * 100;

  return { left: `${left}%` };
};

const getGradientStyle = ({
  minValue,
  maxValue,
  fullValue,
}: {
  minValue: number;
  maxValue: number;
  fullValue: number;
}) => {
  const gradientMinValue = Math.min(GRADIENT_MIN_VALUE, minValue);
  const gradientMaxValue = Math.max(GRADIENT_MAX_VALUE, maxValue);

  const gradientNormalizedMinValue = minValue - gradientMinValue;
  const gradientDelta = gradientMaxValue - gradientMinValue;

  const translate = -(gradientNormalizedMinValue / gradientDelta) * 100;
  const width = (gradientDelta / fullValue) * 100;

  return { transform: `translateX(${translate}%)`, width: `${width}%` };
};

type Props = {
  className?: string;

  hasCurrentValue: boolean;

  currentValue: number;

  localMinValue: number;
  localMaxValue: number;

  globalMinValue: number;
  globalMaxValue: number;
};

export const Range = (props: Props) => {
  const {
    className,

    hasCurrentValue = false,

    currentValue,

    localMinValue,
    localMaxValue,

    globalMinValue,
    globalMaxValue,
  } = props;

  const globalFullValue = globalMaxValue - globalMinValue;

  const rangeValueStyle = getRangeValueStyle({
    minValue: localMinValue - globalMinValue,
    maxValue: localMaxValue - globalMinValue,
    fullValue: globalFullValue,
  });

  const currentValueStyle = getCurrentValueStyle({
    currentValue: currentValue - globalMinValue,
    fullValue: globalFullValue,
  });

  const gradientStyle = getGradientStyle({
    minValue: globalMinValue,
    maxValue: globalMaxValue,
    fullValue: globalFullValue,
  });

  return (
    <div className={cls(styles.root, className)} aria-hidden={true}>
      <span className={styles.rangeValue} style={rangeValueStyle}>
        <span className={styles.gradient} style={gradientStyle}></span>
      </span>

      {hasCurrentValue && <span className={styles.currentValue} style={currentValueStyle} />}
    </div>
  );
};
