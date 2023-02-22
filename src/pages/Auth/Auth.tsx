import React from 'react';
import { AuthForm } from '../../components/AuthForm';

import './Auth.scss';

export const Auth: React.FC = () => (
  <main className="auth">
    <AuthForm />
  </main>
);