import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiMarvelService } from '../../services/apiMarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';
import { Link } from 'react-router-dom';

import './character-search.css';

function CharacterSearch() {
  const { register, handleSubmit, formState } = useForm();

  const [character, setCharactre] = useState(null);
  const [process, setProcess] = useState('pending');
  const [error, setError] = useState(null);

  const onSubmit = ({ name }) => {
    setError(null);
    setProcess('loading');

    apiMarvelService
      .getSingleCharacterByName({ name: name })
      .then((data) => {
        if (data.length) {
          setCharactre(data[0]);
          setProcess('success');
        } else {
          setCharactre(null);
          setProcess('absence');
        }
      })
      .catch((error) => {
        setError(error);
        setProcess('failure');
      });
  };

  useEffect(() => {
    if (formState.errors.name) {
      setProcess('require');
    } else {
      setProcess('pending');
    }
  }, [formState.errors.name?.message]);

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
        {process === 'loading' && <Spinner className={'character-search__main-spinner'} />}
        {process === 'failure' && <ErrorMessage className={'character-search__main-error'} info={error.message} />}
        {process === 'require' && <p className="character-search__main-warning">Please, enter a character name!</p>}
        {process === 'absence' && (
          <p className="character-search__main-text">The character was not found. Check the name and try again.</p>
        )}
        {process === 'success' && (
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
