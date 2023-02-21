import React from 'react';

import './Loader.scss';

type Props = {
  size?: number;
  color?: string;
};

export const Loader: React.FC<Props> = ({ size = 48, color = '#e5e5e5' }) => {
  const styles = {
    width: `${size}px`,
    height: `${size}px`,
    bordeColor: color,
  };

  return <div style={styles} className="loader"></div>;
};
