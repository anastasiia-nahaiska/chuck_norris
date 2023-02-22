import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// import { AuthForm } from './components/AuthForm';

import './App.scss';
import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { Joke } from './components/Joke';
import { UserContextProvider } from './context/UserContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <div className="app">
          <Header />
          <Categories />
          <Joke />
          {/* <AuthForm /> */}

        </div>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
