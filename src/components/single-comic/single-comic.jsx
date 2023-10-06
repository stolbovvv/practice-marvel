import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiMarvelService } from '../../services/apiMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';
import { SingleComicContent } from './single-comic-content';

import './single-comic.css';

function SingleComic() {
  const { id } = useParams();

  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateComic = () => {
    setError(null);
    setLoading(true);

    apiMarvelService
      .getSingleComic({ id: id })
      .then((data) => {
        setLoading(false);
        setComic(data[0]);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    updateComic();
  }, []);

  return (
    <section className="section single-comic">
      <div className="container single-comic__container">
        {error && <ErrorMessage className={'single-comic__error'} />}
        {loading && <Spinner className={'single-comic__spinner'} />}
        {!loading && !error && comic && <SingleComicContent data={comic} />}
      </div>
    </section>
  );
}

export { SingleComic };
