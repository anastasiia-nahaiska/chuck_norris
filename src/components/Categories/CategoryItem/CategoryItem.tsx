import cn from 'classnames';
import React from 'react';

import { useUserContext } from '../../../hooks/useUserContext';

import './CategoryItem.scss';

type Props = {
  category: string;
};

export const CategoryItem: React.FC<Props> = ({ category }) => {
  const { selectedCategory, setSelectedCategory } = useUserContext();

  return (
    <li>
      <button 
        type="button"
        onClick={() => setSelectedCategory(category)}
        className={cn(
          'category',
          { 'category--selected': selectedCategory === category }
        )}
      >
        {category}
      </button>
    </li>
  );
};
