import { useEffect, useState } from 'react';
import { useMarvelService } from '../../services/useMarvelService';
import { setClassName } from '../../utilites';
import { CharacterInfoContent } from './character-info-content';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './character-info.css';

function CharacterInfo({ className, selected }) {
  const [character, setCharacter] = useState(null);
  const { get, error, loading } = useMarvelService();

  const updateCharactre = () => {
    if (!selected) return;

    get.character({ id: selected }).then((data) => setCharacter(data));
  };

  useEffect(() => {
    updateCharactre();
  }, [selected]);

  return (
    <div className={setClassName('character-info', className)}>
      {error ? <ErrorMessage className={'character-info__error'} /> : null}
      {loading ? <Spinner className={'character-info__spinner'} /> : null}
      {!loading && !error ? <CharacterInfoContent data={character} /> : null}
    </div>
  );
}

export { CharacterInfo };
