import { useEffect, useState } from 'react';
import { useList } from '../../hooks';
import { apiMarvelService } from '../../services/apiMarvelService';
import { setClassName } from '../../utilites';
import { ComicListBody } from './comics-list-body';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './comics-list.css';

function ComicList({ classList }) {
  const [comics, updateComics] = useList({ initLimit: 8 });
  const [process, setProcess] = useState('pending');
  const [error, setError] = useState(null);

  const appendComics = () => {
    setError(null);
    setProcess('loading');

    apiMarvelService
      .getAllComics({ limit: comics.limit, offset: comics.offset })
      .then((data) => {
        updateComics({ data: data });
        setProcess('success');
      })
      .catch((error) => {
        setError(error);
        setProcess('failure');
      });
  };

  useEffect(() => {
    appendComics();
  }, []);

  useEffect(() => {
    if (comics.ended) setProcess('ending');
  }, [comics.ended]);

  return (
    <div className={setClassName('comic-list', classList)}>
      {process === 'failure' && <ErrorMessage info={error.message} />}
      {process !== 'failure' && <ComicListBody data={comics.list} />}
      {process === 'loading' && <Spinner size="2.625rem" style={{ marginInline: 'auto' }} />}
      {process !== 'loading' && process !== 'ending' && (
        <button className="button button_red comic-list__button" onClick={appendComics}>
          Load more
        </button>
      )}
    </div>
  );
}

export { ComicList };
