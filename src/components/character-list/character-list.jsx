import { useEffect } from 'react';
import { useList } from '../../hooks/useList';
import { setClassName } from '../../utilites';
import { CharacterIistItem } from './character-list-item';
import { useMarvelService } from '../../services/useMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './character-list.css';

function View({ data, onSelect }) {
  return (
    <ul className="character-list__body">
      {data.map((item) => (
        <CharacterIistItem key={item.id} data={item} onSelect={() => onSelect(item.id)} />
      ))}
    </ul>
  );
}

function CharacterList({ className, onSelect }) {
  const { get, error, loading } = useMarvelService();
  const { list, setList } = useList(9);

  const updateList = () => {
    get.characters({ limit: list.limit, offset: list.offset }).then((data) => setList(data));
  };

  useEffect(() => {
    updateList();
  }, []);

  return (
    <div className={setClassName('character-list', className)}>
      {error ? <ErrorMessage /> : null}
      {!error ? <View data={list.data} onSelect={onSelect} /> : null}
      <button className="character-list__button button button_red" onClick={updateList} disabled={loading}>
        {loading ? <Spinner /> : 'Load more'}
      </button>
    </div>
  );
}

export { CharacterList };
