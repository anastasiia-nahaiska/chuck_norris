import React from 'react';

type Props = {
  message: string;
  size?: number;
};

export const ErrorMeassage: React.FC<Props> = ({ message, size = 16 }) => (
  <div style={{ fontSize: size }} className="error_message">{message}</div>
);
