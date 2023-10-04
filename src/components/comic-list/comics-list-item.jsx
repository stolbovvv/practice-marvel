import { memo } from 'react';
import { setImageStyles } from '../../utilites';

const ComicIistItem = memo(function ComicIistItem({ data }) {
  const style = setImageStyles(data.image);

  return (
    <li className="comic-list__item">
      <a className="comic-list__item-link" href="#">
        <img className="comic-list__item-image" src={data.image} alt={`${data.name} image`} style={style} />
        <div className="comic-list__item-body">
          <h3 className="comic-list__item-name">{data.title}</h3>
          <p className="comic-list__item-price">{data.price ? data.price + '$' : 'Not available'}</p>
        </div>
      </a>
    </li>
  );
});

export { ComicIistItem };
