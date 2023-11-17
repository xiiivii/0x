import React from 'react';

import cls from 'classnames';

import { ButtonBase } from '../ButtonBase';

import styles from './Button.module.css';

type Props = React.ComponentProps<typeof ButtonBase> & {
  className?: string;
};

export const Button = (props: Props) => {
  const { className, ...restProps } = props;

  return (
    <ButtonBase className={cls(styles.root, className)} {...restProps}>
      {props.children}
    </ButtonBase>
  );
};
