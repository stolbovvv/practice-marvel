import { useEffect, useState } from 'react';
import { apiMarvelService } from '../../services/apiMarvelService';
import { setClassName } from '../../utilites';
import { ComicListBody } from './comics-list-body';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './comics-list.css';

function ComicList({ classList }) {
  const COMICS_LIMIT = 8;

  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState(null);
  const [ended, setEnded] = useState(false);

  const updateComics = () => {
    setError(null);
    setLoading(true);

    apiMarvelService
      .getAllComics({ limit: COMICS_LIMIT, offset: offset })
      .then((data) => {
        setLoading(false);
        setComics((comics) => [...comics, ...data]);
        setOffset((offset) => offset + COMICS_LIMIT);
        setEnded(data.length < COMICS_LIMIT);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    updateComics();
  }, []);

  return (
    <div className={setClassName('comic-list', classList)}>
      {error ? <ErrorMessage className={'comic-list__error'} /> : <ComicListBody data={comics} />}
      <button
        className="button button_red comic-list__button"
        style={{ display: ended ? 'none' : 'block' }}
        disabled={loading}
        onClick={updateComics}
      >
        {loading ? <Spinner /> : 'Load more'}
      </button>
    </div>
  );
}

export { ComicList };
