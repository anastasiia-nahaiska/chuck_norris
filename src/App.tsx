import React from 'react';

// import { AuthForm } from './components/AuthForm';

import './App.scss';
import { CategoriesList } from './components/CategoriesList';
import { Header } from './components/Header';
// import { Loader } from './components/Loader';


function App() {
  return (
    <div className="app">
      <Header />
      {/* <AuthForm /> */}
      {/* <Loader /> */}
      <CategoriesList />
    </div>
  );
}

export default App;
