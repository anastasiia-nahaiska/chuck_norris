import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserContext } from '../../hooks/useUserContext';
import { Logo } from '../Logo';

import './Header.scss';

export const Header: React.FC = () => {
  const { setUser } = useUserContext();
  const navigate= useNavigate();

  const logoutHandler = useCallback(() => {
    setUser(null);
    navigate('auth');
  },[]);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <Logo />
        </div>
      
        <button 
          type="button"
          onClick={logoutHandler}
          className="header__logout"
        ></button>
      </div>
    </header>
  );
};
