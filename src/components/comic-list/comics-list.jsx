import { useEffect } from 'react';
import { useList } from '../../hooks/useList';
import { setClassName } from '../../utilites';
import { useMarvelService } from '../../services/useMarvelService';
import { ComicIistItem } from './comics-list-item';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './comics-list.css';

function View({ data }) {
  return (
    <ul className="comic-list__body">
      {data.map((item, index) => (
        <ComicIistItem key={`${item.id}_${index}`} data={item} />
      ))}
    </ul>
  );
}

function ComicList({ classList }) {
  const { list, setList } = useList(12);
  const { get, error, loading } = useMarvelService();

  const updateComics = () => {
    get.comics({ limin: list.limit, offset: list.offset }).then((data) => setList(data));
  };

  useEffect(() => {
    updateComics();
  }, []);

  return (
    <div className={setClassName('comic-list', classList)}>
      {error ? <ErrorMessage className={'comic-list__error'} /> : null}
      {!error ? <View data={list.data} /> : null}
      <button className="button button_red comic-list__button" onClick={updateComics} disabled={loading}>
        {loading ? <Spinner /> : 'Load more'}
      </button>
    </div>
  );
}

export { ComicList };
