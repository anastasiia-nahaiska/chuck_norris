import React from 'react';

import { colors } from '../../constants/colors';

type Props = {
  message: string;
  size?: number;
  color?: string;
  className?: string;
};

export const ErrorMeassage: React.FC<Props> = ({ 
  message,
  size = 16,
  color = colors.typographyPrimary,
  className = '',
}) => (
  <p
    style={{ fontSize: size, color}}
    className={`error_message ${className}`}
  >
    {message}
  </p>
);
