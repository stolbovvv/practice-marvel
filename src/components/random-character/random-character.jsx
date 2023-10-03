import { useEffect, useState } from 'react';
import { setImageStyles, setTextLength } from '../../utilites';
import { useMarvelService } from '../../services/useMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { SpinnerIcon } from '../spinner-icon/spinner-icon';

import './random-character.css';

function RandomCharacterView({ data }) {
  const style = setImageStyles(data.image);
  const descr = setTextLength(data.description);

  return (
    <div className="random-character__main">
      <img className="random-character__main-image" src={data.image} alt={data.name + ' image'} style={style} />
      <div className="random-character__main-body">
        <p className="random-character__main-name">{data.name}</p>
        <p className="random-character__main-text">{descr || 'Charactre description not found...'}</p>
        <div className="random-character__main-buttom-row">
          <a className="button button_red" href={data.home} target="_blank" rel="noopener noreferrer">
            Home page
          </a>
          <a className="button button_black" href={data.wiki} target="_blank" rel="noopener noreferrer">
            Wiki
          </a>
        </div>
      </div>
    </div>
  );
}

function RandomCharacter() {
  const [data, setData] = useState();
  const { get, error, loading } = useMarvelService();

  const updateCharacter = () => {
    get.character({ id: Math.floor(Math.random() * 500 + 1011000) }).then(setData);
  };

  useEffect(() => {
    updateCharacter();
  }, []);

  return (
    <section className="section random-character">
      <div className="container random-character__container">
        <h2 className="title random-character__title">Random Character</h2>

        <div className="random-character__body">
          {error ? <ErrorMessage className={'random-character__error'} /> : null}
          {loading ? <SpinnerIcon className={'random-character__spinner'} /> : null}
          {!loading && !error && data ? <RandomCharacterView data={data} /> : null}

          <div className="random-character__banner">
            <p className="random-character__banner-label">Do you want to get to know him better?</p>
            <div className="random-character__banner-buttom-row">
              <p className="random-character__banner-text">Or choose another one:</p>
              <button className="button button_red" onClick={updateCharacter}>
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
