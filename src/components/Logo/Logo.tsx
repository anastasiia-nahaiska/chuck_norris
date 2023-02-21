import React from 'react';

import logo from '../../images/logo.png';

import './Logo.scss';

export const Logo: React.FC = () => (
  <a href="/" className="logo">
    <img src={logo} alt="" className="logo__img" />

    <p className="logo__text">Chuck Norris</p>
  </a>
);
