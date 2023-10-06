import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function SingleCharacter() {
  const { id } = useParams();
  const [charactre, setCharactre] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <section className="section single-charactre">
      <div className="container single-charactre__container">
        <div className="single-charactre__head">
          <h2 className="title single-charactre__title">Charactre name</h2>
          <Link className="single-charactre__link" to={'/comics'}>
            Back to all
          </Link>
        </div>
        <div className="single-charactre__body">
          <img className="single-charactre__image" src="" alt="" />
        </div>
      </div>
    </section>
  );
}

export { SingleCharacter };
