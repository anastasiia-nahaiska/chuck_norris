import React from 'react';

import { Categories } from '../../components/Categories';
import { Header } from '../../components/Header';
import { Joke } from '../../components/Joke';

import './Home.scss';

export const Home: React.FC= () => (
  <main className="home">
    <Header />
    <Categories />
    <Joke />
  </main>
);
