import { useEffect, useState } from 'react';
import { useMarvelService } from '../../services/useMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './character-info.css';

function CharacterInfoContent({ data }) {
  const style = {};
  const comics = [];

  if (data.img.match('image_not_available')) {
    style.objectPosition = 'left bottom';
  }

  for (let index = 0; index < data.comics.length; index += 1) {
    if (index >= 5) break;
    comics.push(data.comics[index]);
  }

  return (
    <div className="character-info__body">
      <div className="character-info__head">
        <img className="character-info__head-img" src={data.img} alt={data.name} style={style} />
        <div className="character-info__head-body">
          <h3 className="character-info__head-name">{data.name}</h3>
          <a className="character-info__head-link button button_red" href={data.home}>
            Home page
          </a>
          <a className="character-info__head-link button" href={data.wiki}>
            Wiki
          </a>
        </div>
      </div>
      <div className="character-info__text">
        <p>{data.text}</p>
      </div>
      <div className="character-info__comics">
        <h4 className="character-info__comics-title">Comics{comics.length ? ':' : ' not found'}</h4>
        {comics.length ? (
          <ul className="character-info__comics-list">
            {comics.map(({ name }, index) => (
              <li key={index} className="character-info__comics-item">
                {name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function CharacterInfoLoading() {
  return (
    <div className="character-info__loading">
      <p className="character-info__loading-text">Loading...</p>
      <Spinner className={'character-info__loading-spinner'} />
    </div>
  );
}

function CharacterInfoPlaceholder() {
  return (
    <div className="character-info__placeholder">
      <p className="character-info__placeholder-text">Select character</p>
    </div>
  );
}

function CharacterInfo({ className, charactreId }) {
  const { loading, error, get } = useMarvelService();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (!charactreId) return;

    get.character(charactreId).then((data) => {
      setCharacter(data);
    });
  }, [charactreId]);

  return (
    <aside className={['character-info', className].join(' ').trim()}>
      {error ? <ErrorMessage className={'character-info__error'} /> : null}
      {loading ? <CharacterInfoLoading /> : null}
      {!loading && !error && character ? <CharacterInfoContent data={character} /> : null}
      {!loading && !error && !character ? <CharacterInfoPlaceholder /> : null}
    </aside>
  );
}

export { CharacterInfo };
