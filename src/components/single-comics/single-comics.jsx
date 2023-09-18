import './single-comics.css';

function SingleComics() {
  return (
    <section className="single-comics section">
      <div className="single-comics__container container">
        <div className="single-comics__head">
          <a className="single-comics__link-back" href="/comics">
            Back to all comics
          </a>
        </div>
        <div className="single-comics__body">
          <img className="single-comics__img" src="https://placehold.co/300x400.png" alt="" />
          <div className="single-comics__info">
            <h2 className="single-comics__name">Comics name</h2>
            <p className="single-comics__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt assumenda similique enim eos possimus
              voluptatem corporis mollitia inventore! Optio, commodi?
            </p>
            <div className="single-comics__props">
              <span className="single-comics__props-label">Pagse:</span>
              <span className="single-comics__props-value">0</span>
            </div>
            <div className="single-comics__props">
              <span className="single-comics__props-label">Language:</span>
              <span className="single-comics__props-value">en-es</span>
            </div>
            <div className="single-comics__props">
              <span className="single-comics__props-label">Price:</span>
              <span className="single-comics__props-value">Not available</span>
            </div>
            <div className="single-comics__characters">
              <h3 className="single-comics__characters-title">Characters:</h3>
              <ul className="single-comics__characters-list">
                <li className="single-comics__characters-item">
                  <a className="single-comics__characters-link" href="#">
                    caharacter
                  </a>
                </li>
                <li className="single-comics__characters-item">
                  <a className="single-comics__characters-link" href="#">
                    caharacter
                  </a>
                </li>
                <li className="single-comics__characters-item">
                  <a className="single-comics__characters-link" href="#">
                    caharacter
                  </a>
                </li>
                <li className="single-comics__characters-item">
                  <a className="single-comics__characters-link" href="#">
                    caharacter
                  </a>
                </li>
                <li className="single-comics__characters-item">
                  <a className="single-comics__characters-link" href="#">
                    caharacter
                  </a>
                </li>
                <li className="single-comics__characters-item">
                  <a className="single-comics__characters-link" href="#">
                    caharacter
                  </a>
                </li>
                <li className="single-comics__characters-item">
                  <a className="single-comics__characters-link" href="#">
                    caharacter
                  </a>
                </li>
                <li className="single-comics__characters-item">
                  <a className="single-comics__characters-link" href="#">
                    caharacter
                  </a>
                </li>
                <li className="single-comics__characters-item">
                  <a className="single-comics__characters-link" href="#">
                    caharacter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SingleComics };
