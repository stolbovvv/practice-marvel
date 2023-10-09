import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiMarvelService } from '../../services/apiMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';
import { Link } from 'react-router-dom';

import './character-search.css';

function CharacterSearch() {
  const { register, handleSubmit, formState } = useForm();

  const [character, setCharactre] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = ({ name }) => {
    setError(null);
    setLoading(true);

    apiMarvelService
      .getSingleCharacterByName({ name })
      .then((data) => {
        setLoading(false);
        setCharactre(data.length ? data[0] : 'not-found');
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  return (
    <div className="character-search">
      <div className="character-search__form">
        <h3 className="character-search__form-title">Or find a character by name:</h3>
        <form className="character-search__form-body" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="character-search__form-input"
            placeholder="Enter name"
            defaultValue={''}
            {...register('name', { required: true })}
          />
          <button className="button button_red character-search__form-button" type="submit">
            FIND
          </button>
        </form>
      </div>
      <div className="character-search__main">
        {error && <ErrorMessage className={'character-search__main-error'} />}
        {loading && <Spinner className={'character-search__main-spinner'} />}
        {!loading && !error && formState.errors.name && (
          <p className="character-search__main-warning">Please, enter a character name!</p>
        )}
        {!loading && !error && !formState.errors.name && character === 'not-found' && (
          <p className="character-search__main-warning">The character was not found. Check the name and try again.</p>
        )}
        {!loading && !error && !formState.errors.name && character !== 'not-found' && character && (
          <div className="character-search__main-result">
            <p className="character-search__main-reuslt-text">{`There is! Visit ${character.name} page?`}</p>
            <Link className="button button_black character-search__main-button" to={`/characters/${character.id}`}>
              TO PAGE
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export { CharacterSearch };
