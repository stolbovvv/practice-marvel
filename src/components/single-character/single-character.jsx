import { Link } from 'react-router-dom';
import { getImageStyles } from '../../utilites';

import './single-character.css';

function SingleCharacter({ data }) {
  const style = getImageStyles(data.image);

  return (
    <section className="section single-character">
      <div className="container single-character__container">
        <Link className="single-character__link-back" to={'/characters'}>
          BACK TO ALL CHARACTERS
        </Link>
        <div className="single-character__content">
          <img className="single-character__content-image" src={data.image} alt={`${data.name} image`} style={style} />
          <div className="single-character__content-body">
            <div className="single-character__content-body-head">
              <h2 className="single-character__content-title">{data.name}</h2>
            </div>
            <p className="single-character__content-descr">{data.descr || 'Character description not found...'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SingleCharacter };
