import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiMarvelService } from '../../services/apiMarvelService';
import { SingleCharacterContent } from './single-character-content';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './single-character.css';

function SingleCharacter() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCharacter = () => {
    setError(null);
    setLoading(true);

    apiMarvelService
      .getSingleCharacter({ id: id })
      .then((data) => {
        setLoading(false);
        setCharacter(data[0]);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    updateCharacter();
  }, []);

  return (
    <section className="section single-character">
      <div className="container single-character__container">
        {error && <ErrorMessage className={'single-character__error'} />}
        {loading && <Spinner className={'single-character__spinner'} />}
        {!loading && !error && character && <SingleCharacterContent data={character} />}
      </div>
    </section>
  );
}

export { SingleCharacter };
