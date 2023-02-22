import React from 'react';

import './PrimaryButton.scss';

type Props = {
  onCkick?: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export const PrimaryButton: React.FC<Props> = ({
  onCkick = () => {},
  text,
  type = 'button',
  className = '',
}) => (
  <button 
    type={type}
    onClick={onCkick}
    className={`primary_button ${className}`}
  >
    {text}
  </button>
);
