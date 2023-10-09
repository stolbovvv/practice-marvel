import { useEffect, useState } from 'react';
import { RandomCharacterContent } from './random-character-content';
import { apiMarvelService } from '../../services/apiMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './random-character.css';

function RandomCharacter() {
  const [character, setCharacter] = useState(null);
  const [process, setProcess] = useState('pending');
  const [error, setError] = useState(null);

  const updateCharacter = () => {
    setError(null);
    setProcess('loading');

    apiMarvelService
      .getSingleCharacter({ id: Math.floor(Math.random() * 500 + 1011000) })
      .then((data) => {
        setCharacter(data[0]);
        setProcess('success');
      })
      .catch((error) => {
        setError(error);
        setProcess('failure');
      });
  };

  useEffect(() => {
    updateCharacter();
  }, []);

  return (
    <section className="section random-character">
      <div className="container random-character__container">
        <h2 className="title random-character__title">Random character for today!</h2>

        <div className="random-character__body">
          {process === 'failure' && <ErrorMessage className={'random-character__error'} info={error.message} />}
          {process === 'loading' && <Spinner className={'random-character__spinner'} />}
          {process === 'success' && <RandomCharacterContent data={character} />}
          <div className="random-character__banner">
            <p className="random-character__banner-title">Do you want to get to know him better?</p>
            <div className="random-character__banner-footer">
              <p className="random-character__banner-text">Or choose another one:</p>
              <button className="random-character__banner-button button button_red" onClick={updateCharacter}>
                TRY IT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { RandomCharacter };
