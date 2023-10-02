import { useEffect } from 'react';
import { useList } from '../../hooks/useList';
import { setThumbnailStyles } from '../../utilites';
import { useMarvelService } from '../../services/useMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './character-catalog.css';

function CharacterCatalogListItem({ img, name, onSelect }) {
  const onKeyDown = (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      onSelect();
    }

    if (e.code === 'Enter') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <li className="character-catalog__list-item" tabIndex={0} onClick={onSelect} onKeyDown={onKeyDown}>
      <img className="character-catalog__list-item-img" src={img} alt={name} style={setThumbnailStyles(img)} />
      <div className="character-catalog__list-item-body">
        <span className="character-catalog__list-item-name">{name}</span>
      </div>
    </li>
  );
}

function CharacterCatalogList({ data, onSelect }) {
  return (
    <ul className="character-catalog__list">
      {data.map(({ id, img, name }) => (
        <CharacterCatalogListItem key={id} img={img} name={name} onSelect={() => onSelect(id)} />
      ))}
    </ul>
  );
}

function CharacterCatalog({ className, onSelect }) {
  const { loading, error, get } = useMarvelService();
  const { list, ended, limit, offset, updateList } = useList(9);

  const updateCharacters = () => {
    get.characters({ limit, offset }).then((data) => {
      updateList(data);
    });
  };

  useEffect(() => {
    updateCharacters();
  }, []);

  return (
    <div className={['character-catalog', className].join(' ').trim()}>
      {error ? <ErrorMessage className={'character-catalog__error'} /> : null}
      {error ? null : <CharacterCatalogList data={list} onSelect={onSelect} />}
      <button
        className="character-catalog__button button button_red"
        style={{ display: ended ? 'none' : 'block' }}
        onClick={updateCharacters}
        disabled={loading}
      >
        {loading ? <Spinner size="1.25rem" /> : 'Load more'}
      </button>
    </div>
  );
}

export { CharacterCatalog };
