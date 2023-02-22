import { useQuery } from 'react-query';
import { getJokeFromCategory } from '../api/getJokeFromCategory';

export const useJokeFromCategory = (category: string) => {
  return useQuery(
    'joke',
    () => getJokeFromCategory(category),
    {
      enabled: false,
    }
  );
};
