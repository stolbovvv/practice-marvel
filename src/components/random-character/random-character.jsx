import { useEffect, useState } from 'react';
import { setDescriptionText, setThumbnailStyles } from '../../utilites';
import { useMarvelService } from '../../services/useMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './random-character.css';

function RandomCharacterView({ data }) {
  return (
    <>
      <img className="random-character__main-img" src={data.img} alt="" style={setThumbnailStyles(data.img)} />
      <div className="random-character__main-body">
        <h3 className="random-character__main-name">{data.name}</h3>
        <p className="random-character__main-text">{setDescriptionText(data.text)}</p>
        <div className="random-character__main-links">
          <a className="random-character__main-link button button_red" href={data.home}>
            Home page
          </a>
          <a className="random-character__main-link button" href={data.wiki}>
            Wiki
          </a>
        </div>
      </div>
    </>
  );
}

function RandomCharacter() {
  const { loading, error, get } = useMarvelService();
  const [character, setCharacter] = useState(null);

  const updateCharacter = () => {
    get.character(Math.floor(Math.random() * 500 + 1011000)).then((data) => {
      setCharacter(data);
    });
  };

  useEffect(() => {
    updateCharacter();
  }, []);

  return (
    <section className="random-character section">
      <div className="random-character__container container">
        <div className="random-character__head">
          <h2 className="random-character__title">Random character</h2>
        </div>
        <div className="random-character__body">
          <div className="random-character__main">
            {error ? <ErrorMessage className={'random-character__main-error'} /> : null}
            {loading ? <Spinner className={'random-character__main-spinner'} size="2.5rem" /> : null}
            {!loading && !error && character ? <RandomCharacterView data={character} /> : null}
          </div>
          <div className="random-character__foot">
            <p className="random-character__foot-title">Do you want to get to know him better?</p>
            <div className="random-character__foot-last">
              <p className="random-character__foot-text">Or choose another one:</p>
              <button className="random-character__foot-button button button_red" onClick={updateCharacter}>
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
