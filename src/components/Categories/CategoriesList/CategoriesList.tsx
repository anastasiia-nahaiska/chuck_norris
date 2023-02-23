import React from 'react';

import { CategoryItem } from '../CategoryItem';
import { Category } from '../../../types/Category';

import './CategoriesList.scss';

type Props = {
  categories: Category[];
};

export const CategoriesList: React.FC<Props> = ({ categories }) => (
  <ul className="categories_list">
    {categories.map(category => (
      <CategoryItem key={category.id} category={category.name} />
    ))}
  </ul>
);
