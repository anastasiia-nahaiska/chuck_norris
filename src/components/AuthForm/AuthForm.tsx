import { useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';

import chuck from '../../images/chuck_norris.png';

import './AuthForm.scss';
import { useUserContext } from '../../hooks/useUserContext';
import { invalid_name_message } from '../../constants/messages';

export const AuthForm: React.FC = () => {
  const { setUser } = useUserContext();
  const [ name, setName ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const navigate= useNavigate();

  const validateName = useCallback(() => {
    if (/^[a-zA-Z ]+$/.test(name.trim())) {
      setErrorMessage('');
    } else {
      setErrorMessage(invalid_name_message);
    }
  }, [name]);

  const onFormSubmit = useCallback((
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!errorMessage.length) {
      setUser({ name });
      setName('');
      navigate('/');
    }
  }, [errorMessage, name]);


  return (
    <form onSubmit={(e) => onFormSubmit(e)} className="auth_form">
      <div className="auth_form__main_content">
        <label htmlFor="name" className="auth_form__field">
            Hi, there! I am Chuck Norris! What should I call you?
      
          <input 
            id="name" 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            required
            className="auth_form__input" 
          /> 

          <CSSTransition
            in={errorMessage.length > 0}
            timeout={300}
            className="auth_form__error"
            unmountOnExit
          >
            <p >{errorMessage}</p>
          </CSSTransition>
        </label>
        
        <button type="submit" className="auth_form__submit">Go</button>
      </div>
      
      <img src={chuck} alt="chuck norris" className="auth_form__img"/>
    </form>
  );
};
