import React from 'react';

import './CategoryItem.scss';

type Props = {
  category: string;
};

export const CategoryItem: React.FC<Props> = ({ category }) => (
  <li className="category">{category}</li>
);
