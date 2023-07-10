import React from 'react';

import cls from 'classnames';

import styles from './ButtonBase.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const ButtonBase = (props: Props) => {
  const { className, ...restProps } = props;

  return (
    <button className={cls(styles.root, props.className)} {...restProps}>
      {props.children}
    </button>
  );
};
