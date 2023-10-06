import { Link } from 'react-router-dom';
import { getImageStyles } from '../../utilites';

function SingleComicContent({ data }) {
  const style = getImageStyles(data.image);

  return (
    <>
      <Link className="single-comic__link-back" to={'/comics'}>
        BACK TO ALL COMICS
      </Link>
      <div className="single-comic__content">
        <img className="single-comic__content-image" src={data.image} alt={`${data.name} image`} style={style} />
        <div className="single-comic__content-body">
          <div className="single-comic__content-body-head">
            <h2 className="single-comic__content-title">{data.title}</h2>
          </div>
          <p className="single-comic__content-descr">{data.descr}</p>
          <ul className="single-comic__content-list">
            <li className="single-comic__content-item">
              <spapn className="single-comic__content-item-label">Pages:</spapn>
              <spapn className="single-comic__content-item-value">{data.pageCount}</spapn>
            </li>
            <li className="single-comic__content-item">
              <spapn className="single-comic__content-item-label">Price:</spapn>
              <spapn className="single-comic__content-item-value">
                {data.price ? `${data.price}$` : 'Not available'}
              </spapn>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export { SingleComicContent };
