import React, { ReactNode, useState } from 'react';
import { useStorage } from '../hooks/useStorage';
import { User } from '../types/User';
import { UserContextI } from '../types/UserContextI';

export const UserContext = React.createContext<UserContextI>({
  user: null,
  setUser: () => {},
  selectedCategory: '',
  setSelectedCategory: () => {},
});

type Props = {
  children: ReactNode
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useStorage<User | null>('user', null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const contextValues = {
    user,
    setUser,
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <UserContext.Provider value={contextValues}>
      { children }
    </UserContext.Provider>
  );
};
