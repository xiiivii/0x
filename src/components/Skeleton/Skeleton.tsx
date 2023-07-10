import React from 'react';

import cls from 'classnames';

import styles from './Skeleton.module.css';

export const getSkeletonAnimationDuration = () => {
  const root = getComputedStyle(document.documentElement);
  const value = root.getPropertyValue('--skeleton-animation-duration');

  return parseInt(value);
};

type Props = {
  className?: string;
};

export const Skeleton = (props: Props) => <div className={cls(styles.root, props.className)}></div>;
