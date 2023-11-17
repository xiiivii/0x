import React, { PropsWithChildren } from 'react';

import cls from 'classnames';
import { getChildByType } from 'react-nanny';

import styles from './Panel.module.css';

type PanelTitleProps = PropsWithChildren<{
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;
const PanelTitle = (props: PanelTitleProps) => {
  const { className, as: HTMLElement = 'h2', children } = props;

  return (
    <HTMLElement className={cls(styles.title, className)}>
      {children}
      <div className={styles.divider}></div>
    </HTMLElement>
  );
};

type PanelContentProps = PropsWithChildren<{
  className?: string;

  isScrollableHorizontally?: boolean;
}>;
const PanelContent = (props: PanelContentProps) => {
  const {
    className,

    isScrollableHorizontally = false,

    children,
  } = props;

  return (
    <div
      className={cls(className, {
        [styles.content]: true,
        [styles.contentScrollableHorizontally]: isScrollableHorizontally,
      })}
    >
      <div className={styles.contentInner}>{children}</div>
    </div>
  );
};

type PanelProps = PropsWithChildren<{
  className?: string;
  children: Array<React.ReactElement<typeof PanelTitle | typeof PanelContent>>;
}>;
const Panel = (props: PanelProps) => {
  const { className, children } = props;

  const titleChild = getChildByType(children, PanelTitle);
  const contentChild = getChildByType(children, PanelContent);

  if (!titleChild || !contentChild) {
    throw new Error('Panel must have Panel.Title and Panel.Content!');
  }

  return (
    <section className={cls(styles.root, className)}>
      {titleChild}
      {contentChild}
    </section>
  );
};

Panel.Title = PanelTitle;
Panel.Content = PanelContent;

export { Panel };
