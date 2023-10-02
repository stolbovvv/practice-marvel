import { useCallback, useEffect, useState } from 'react';
import { MarvelService } from '../../services/MarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './comic-catalog.css';

function ComicCatalogListItem({ img, name, price, href }) {
  const style = {};

  if (img.match('image_not_available')) {
    style.objectPosition = 'left bottom';
  }

  return (
    <li className="comic-catalog__list-item">
      <a className="comic-catalog__list-item-link" href={href}>
        <img className="comic-catalog__list-item-img" src={img} alt={name} style={style} />
        <span className="comic-catalog__list-item-body">
          <span className="comic-catalog__list-item-name">{name}</span>
          <span className="comic-catalog__list-item-price">{price}</span>
        </span>
      </a>
    </li>
  );
}

function ComicCatalogList({ data }) {
  return (
    <ul className="comic-catalog__list">
      {data.map(({ id, img, name, price, href }, index) => (
        <ComicCatalogListItem key={`${id}_${index}`} img={img} name={name} price={price} href={href} />
      ))}
    </ul>
  );
}

function ComicCatalog({ className }) {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [offset, setOffset] = useState(0);

  const marvelServiceLimit = 12;

  const onError = () => {
    setIsLoading(false);
    setIsError(false);
  };

  const onLoading = () => {
    setIsLoading(true);
    setIsError(false);
  };

  const onUpdate = (data) => {
    setComics((comics) => [...comics, ...data]);
    setIsLoading(false);
    setIsEnded(data.length < marvelServiceLimit);
    setOffset((offset) => offset + marvelServiceLimit);
  };

  const updateComics = useCallback(() => {
    onLoading();
  }, []);

  useEffect(() => {
    updateComics();
  }, [updateComics]);

  return (
    <div className={['comic-catalog', className].join(' ').trim()}>
      {isError ? <ErrorMessage className={'comic-catalog__error'} /> : null}
      {isError ? null : <ComicCatalogList data={comics} />}
      <button
        className="comic-catalog__button button button__red"
        style={{ display: isEnded ? 'none' : 'block' }}
        onClick={this.updateComics}
        disabled={isLoading}
      >
        {isLoading ? <Spinner size="1.25rem" /> : 'Load more'}
      </button>
    </div>
  );
}

export { ComicCatalog };
