import { useEffect, useState } from 'react';
import { setClassName } from '../../utilites';
import { apiMarvelService } from '../../services/apiMarvelService';
import { CharacterInfoContent } from './character-info-content';
import { CharacterInfoIdle } from './character-info-idle';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './character-info.css';

function CharacterInfo({ className, selected }) {
  const [character, setCharacter] = useState(null);
  const [process, setProcess] = useState('pending');
  const [error, setError] = useState(null);

  const updateCharactre = () => {
    if (!selected) return;

    setError(null);
    setProcess('loading');

    apiMarvelService
      .getSingleCharacter({ id: selected })
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
    updateCharactre();
  }, [selected]);

  return (
    <div className={setClassName('character-info', className)}>
      {process === 'pending' && <CharacterInfoIdle text={'Choose a character'} />}
      {process === 'loading' && <Spinner className={'character-info__spinner'} />}
      {process === 'success' && <CharacterInfoContent data={character} />}
      {process === 'failure' && <ErrorMessage className={'character-info__error'} info={error.message} />}
    </div>
  );
}

export { CharacterInfo };
