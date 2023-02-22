import React, { useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CategoriesList } from './CategoriesList';
import { Loader } from '../Loader';
import { ErrorMeassage } from '../ErrorMeassage';
import { request_error_message } from '../../constants/messages';

import './Categories.scss';
import { useCategories } from '../../hooks/useCategories';



export const Categories:React.FC = () => {
  const { isLoading, error, data, refetch } = useCategories();

  const categories = useMemo(() => (
    data?.map(item => ({ name: item, id: uuidv4() })) || []
  ), [data]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <section className="categories">
      <h2 className="categories__title">Categories</h2>
      {isLoading && <Loader />}

      {error ? (
        <ErrorMeassage message={request_error_message} />
      ) : (
        <CategoriesList categories={categories} />
      )}
      
    </section>
  );
};
