import React, { CSSProperties } from 'react';
import { colors } from '../../constants/colors';

import './Loader.scss';

type Props = {
  size?: number;
  color?: string;
};

export const Loader: React.FC<Props> = ({ 
  size = 48,
  color = colors.secondary
}) => {
  const styles: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderColor: color,
  };

  return (
    <div className="loader">
      <div style={styles} className="loader__spinner"></div>
    </div>
  );
};
