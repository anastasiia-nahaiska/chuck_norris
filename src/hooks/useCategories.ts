import { useQuery } from 'react-query';
import { getCategories } from '../api/getGategories';

export const useCategories = () => {
  return useQuery(
    'categories',
    getCategories,
    {
      enabled: false,
    }
  );
};
