import React, { useCallback } from 'react';
import { useStorage } from '../../hooks/useStorage';
import { User } from '../../types/User';

import { Logo } from '../Logo';

import './Header.scss';

export const Header: React.FC = () => {
  const [ , setUser ] = useStorage<User | null>('user', null);

  const logoutHandler = useCallback(() => {
    setUser(null);
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
