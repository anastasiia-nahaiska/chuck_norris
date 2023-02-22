import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { 
  HashRouter as Router,
  Route, 
  Routes, 
  Navigate,
} from 'react-router-dom';

import './App.scss';

import { useUserContext } from './hooks/useUserContext';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

const queryClient = new QueryClient();

function App() {
  const {user} = useUserContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={user ? <Home /> : <Navigate to="auth" />} 
          />

          <Route 
            path="auth" 
            element={!user ? <Auth /> : <Navigate to="/" />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
   
  );
}

export default App;
