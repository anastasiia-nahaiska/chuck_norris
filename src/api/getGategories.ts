import { get } from '../utils/fetch';

export const getCategories = async (): Promise<string[]> => (
  get(`${process.env.REACT_APP_CHUCK_NORRIS_API_URL}/jokes/categories`)
);
