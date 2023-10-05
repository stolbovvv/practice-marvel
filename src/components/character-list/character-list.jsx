import { useEffect, useState } from 'react';
import { apiMarvelService } from '../../services/apiMarvelService';
import { setClassName } from '../../utilites';
import { CharacterListBody } from './character-list-body';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './character-list.css';

function CharacterList({ className, onSelect }) {
  const CHARACTER_LIMIT = 9;

  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState([]);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState(null);
  const [ended, setEnded] = useState(false);

  const updateCharacters = () => {
    setLoading(true);

    apiMarvelService
      .getAllCharacters({ limit: CHARACTER_LIMIT, offset: offset })
      .then((data) => {
        setLoading(false);
        setCharacter((character) => [...character, ...data]);
        setOffset((offset) => offset + CHARACTER_LIMIT);
        setEnded(data.length < CHARACTER_LIMIT);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    updateCharacters();
  }, []);

  return (
    <div className={setClassName('character-list', className)}>
      {error ? <ErrorMessage /> : <CharacterListBody data={character} onSelect={onSelect} />}
      <button
        className="button button_red character-list__button"
        style={{ display: ended ? 'none' : 'block' }}
        disabled={loading}
        onClick={updateCharacters}
      >
        {loading ? <Spinner /> : 'Load more'}
      </button>
    </div>
  );
}

export { CharacterList };
