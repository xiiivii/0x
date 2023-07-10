import React, { ElementType, PropsWithChildren } from 'react';

import styles from './VisuallyHidden.module.css';

type Props = PropsWithChildren<{
  as?: ElementType;
}>;

export const VisuallyHidden = ({ as: HTMLElement = 'span', children }: Props) => (
  <HTMLElement className={styles.root}>{children}</HTMLElement>
);
