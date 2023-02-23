import React, { useEffect } from 'react';

import { colors } from '../../constants/colors';
import {
  default_joke_message,
  request_error_message,
} from '../../constants/messages';
import { useJokeFromCategory } from '../../hooks/useJokeFromCategory';
import { useUserContext } from '../../hooks/useUserContext';
import chuck from '../../images/chuck_norris.png';
import { ErrorMeassage } from '../ErrorMeassage';
import { Loader } from '../Loader';

import './Fact.scss';

export const Fact: React.FC = () => {
  const { user, selectedCategory } = useUserContext();
  const {
    isLoading,
    error,
    data: fact,
    refetch
  } = useJokeFromCategory(selectedCategory);

  useEffect(() => {
    if (selectedCategory.length > 0) {
      refetch();
    }

  }, [selectedCategory]);

  return (
    <section className="joke">
      <div className="joke__board">
        <>
          { isLoading && <Loader color={colors.primary} size={40} />}
        
          {!isLoading && !error && (
            <p className="joke__text">{fact?.value || `${user?.name}, ${default_joke_message}`}</p>
          )}

          {!isLoading && error &&(
            <ErrorMeassage 
              message={request_error_message}
              color={colors.typographySecondary}
            />
          )}
        </>
      </div>
      
      <img src={chuck} alt="chuck norris" className="joke__img" />
    </section>
  );
};
