import { Joke } from '../types/Joke';
import { get } from '../utils/fetch';

const MAIN_API_URL='https://api.chucknorris.io';

export const getRandomJoke = (): Promise<Joke> => get(`${MAIN_API_URL}/jokes/random`);


export const getRandomCategoryJoke = (category?: string): Promise<Joke> => (
  get(`${MAIN_API_URL}/jokes/random?category=${category}`)
);

export const getCategories = async (): Promise<string[]> => get(`${MAIN_API_URL}/jokes/categories`);

