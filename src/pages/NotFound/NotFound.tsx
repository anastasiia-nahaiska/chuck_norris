import React from 'react';

import { ErrorMeassage } from '../../components/ErrorMeassage';
import { PrimaryButton } from '../../components/PrimaryButton';
import { page_not_found_message } from '../../constants/messages';

import './NotFound.scss';

export const NotFound: React.FC = () => (
  <main className="not_found">
    <div className="not_found__content">
      <ErrorMeassage 
        message={page_not_found_message} 
        size={20} 
        className="not_found__message"
      />

      <a href="/">
        <PrimaryButton 
          text="Get back on track"
          className="not_found__button"
        />
      </a>
    </div>
  </main>
);
