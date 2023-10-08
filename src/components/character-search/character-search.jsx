import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiMarvelService } from '../../services/apiMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './character-search.css';

function CharacterSearch() {
  const { register, handleSubmit } = useForm();

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
        setCharactre(data[0]);
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
            {...register('name', { required: true })}
          />
          <button className="button button_red character-search__form-button" type="submit">
            FIND
          </button>
        </form>
      </div>
      <div className="character-search__main">
        {error ? <ErrorMessage /> : null}
        {loading ? <Spinner /> : null}
        {!loading && !error && character ? <p>Found character</p> : null}
        {!loading && !error && !character ? <p>Charactre not found </p> : null}
      </div>
    </div>
  );
}

export { CharacterSearch };
