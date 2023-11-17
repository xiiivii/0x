import React from 'react';

type Props = {
  className?: string;
  value: number;
};

export const Temperature = (props: Props) => {
  const { className, value } = props;

  return <span className={className}>{value}°</span>;
};
