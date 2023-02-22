import { Joke } from '../types/Joke';
import { get } from '../utils/fetch';

export const getJokeFromCategory = (category: string): Promise<Joke> => (
  get(`${process.env.REACT_APP_CHUCK_NORRIS_API_URL}/jokes/random?category=${category}`)
);



