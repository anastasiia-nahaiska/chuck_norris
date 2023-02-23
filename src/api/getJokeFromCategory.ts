import { Fact } from '../types/Fact';
import { get } from '../utils/fetch';

export const getJokeFromCategory = (category: string): Promise<Fact> => (
  get(`${process.env.REACT_APP_CHUCK_NORRIS_API_URL}/jokes/random?category=${category}`)
);
