import { useEffect, useState } from 'react';
import { setClassName, setImageStyles } from '../../utilites';
import { useMarvelService } from '../../services/useMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './character-info.css';

function View({ data }) {
  if (data) {
    const style = setImageStyles(data.image);
    const comics = [];

    for (let index = 0; index < data.comics.length; index++) {
      if (index >= 5) break;

      comics.push(
        <li className="character-info__list-item" key={index + 1}>
          {data.comics[index].name}
        </li>,
      );
    }

    return (
      <>
        <div className="character-info__head">
          <img className="character-info__head-image" src={data.image} alt={`${data.name} image`} style={style} />
          <div className="character-info__head-body">
            <h3 className="character-info__head-name">{data.name}</h3>
            <a className="button button_red" href={data.home} target="_blank" rel="noopener noreferrer">
              Home page
            </a>
            <a className="button button_black" href={data.wiki} target="_blank" rel="noopener noreferrer">
              Wiki
            </a>
          </div>
        </div>
        <p className="character-info__text">{data.descr || 'Character description not found...'}</p>
        <div className="character-info__list">
          <h4 className="character-info__list-title">Comics:</h4>

          {data.comics.length ? (
            <ul className="character-info__list-body">{comics}</ul>
          ) : (
            <p className="character-info__list-text">Not found...</p>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="character-info__placeholder">
      <p className="character-info__placeholder-text">Choose a character</p>
    </div>
  );
}

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
      {!loading && !error ? <View data={character} /> : null}
    </div>
  );
}

export { CharacterInfo };
