import React from 'react';
import { colors } from '../../constants/colors';

type Props = {
  message: string;
  size?: number;
  color?: string;
};

export const ErrorMeassage: React.FC<Props> = ({ 
  message,
  size = 16,
  color = colors.typographyPrimary,
}) => (
  <div
    style={{ fontSize: size, color }}
    className="error_message"
  >
    {message}
  </div>
);
