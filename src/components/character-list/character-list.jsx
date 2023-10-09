import { useEffect, useState } from 'react';
import { useList } from '../../hooks';
import { apiMarvelService } from '../../services/apiMarvelService';
import { setClassName } from '../../utilites';
import { CharacterListBody } from './character-list-body';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './character-list.css';

function CharacterList({ className, onSelect }) {
  const [characters, updateCharacters] = useList({ initLimit: 9 });
  const [process, setProcess] = useState('pending');
  const [error, setError] = useState(null);

  const appendCharacters = () => {
    setError(null);
    setProcess('loading');

    apiMarvelService
      .getAllCharacters({ limit: characters.limit, offset: characters.offset })
      .then((data) => {
        updateCharacters({ data: data });
        setProcess('success');
      })
      .catch((error) => {
        setError(error);
        setProcess('failure');
      });
  };

  useEffect(() => {
    appendCharacters();
  }, []);

  useEffect(() => {
    if (characters.ended) setProcess('ending');
  }, [characters.ended]);

  return (
    <div className={setClassName('character-list', className)}>
      {process === 'failure' && <ErrorMessage info={error.message} />}
      {process !== 'failure' && <CharacterListBody data={characters.list} onSelect={onSelect} />}
      {process === 'loading' && <Spinner size="2.625rem" style={{ marginInline: 'auto' }} />}
      {process !== 'loading' && process !== 'ending' && (
        <button className="button button_red character-list__button" onClick={appendCharacters}>
          Load more
        </button>
      )}
    </div>
  );
}

export { CharacterList };
