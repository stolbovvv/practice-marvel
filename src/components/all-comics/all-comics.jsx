import './all-comics.css';

function AllComicsItem() {
  return (
    <li className="all-comics__item">
      <a className="all-comics__item-link" href="#">
        <img className="all-comics__item-img" src="https://placehold.co/300x400.png" alt="" />
        <span className="all-comics__item-body">
          <span className="all-comics__item-name">Name</span>
          <span className="all-comics__item-price">Not available</span>
        </span>
      </a>
    </li>
  );
}

function AllComics() {
  return (
    <section className="all-comics section">
      <div className="all-comics__container container">
        <h2 className="all-comics__title">All comics</h2>

        <div className="all-comics__catalog">
          <ul className="all-comics__list">
            <AllComicsItem />
            <AllComicsItem />
            <AllComicsItem />
            <AllComicsItem />
            <AllComicsItem />
            <AllComicsItem />
            <AllComicsItem />
            <AllComicsItem />
            <AllComicsItem />
            <AllComicsItem />
          </ul>
          <button className="all-comics__button button button_red">Load more</button>
        </div>
      </div>
    </section>
  );
}

export { AllComics };
