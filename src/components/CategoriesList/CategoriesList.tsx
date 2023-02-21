import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

import { getCategories } from '../../api/content';
import { CategoryItem } from './CategoryItem';
import { Loader } from '../Loader';
import { ErrorMeassage } from '../ErrorMeassage';
import { request_error_message } from '../../constants/messages';

import './CategoriesList.scss';

export const CategoriesList: React.FC = () => {
  const { 
    isLoading,
    error,
    data,
  } = useQuery(['category'], getCategories);

  const categories = data?.map(item => ({ name: item, id: uuidv4() })) || [];

  return (
    <ul className="categories_list">
      {isLoading && <Loader size={60} />}
      {error ? (
        <ErrorMeassage message={request_error_message} />
      ) : (
        categories.map(category => (
          <CategoryItem key={category.id} category={category.name} />
        ))
      )}
    </ul>
  );
};