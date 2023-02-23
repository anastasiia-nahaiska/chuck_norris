import React from 'react';

import { Categories } from '../../components/Categories';
import { Header } from '../../components/Header';
import { Fact } from '../../components/Fact';

import './Home.scss';

export const Home: React.FC= () => (
  <main className="home">
    <Header />
    <Categories />
    <Fact />
  </main>
);
