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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCharactre = () => {
    if (!selected) return;

    setError(null);
    setLoading(true);

    apiMarvelService
      .getSingleCharacter({ id: selected })
      .then((data) => {
        setLoading(false);
        setCharacter(data[0]);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    updateCharactre();
  }, [selected]);

  return (
    <div className={setClassName('character-info', className)}>
      {error ? <ErrorMessage className={'character-info__error'} /> : null}
      {loading ? <Spinner className={'character-info__spinner'} /> : null}
      {!loading && !error && character ? <CharacterInfoContent data={character} /> : null}
      {!loading && !error && !character ? <CharacterInfoIdle text={'Choose a character'} /> : null}
    </div>
  );
}

export { CharacterInfo };
