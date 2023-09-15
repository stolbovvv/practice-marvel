import './all-characters.css';

function AllCharactersItem() {
  return (
    <li className="all-characters__item" tabIndex={0}>
      <img className="all-characters__item-img" src="https://placehold.co/300x300.png" alt="" />
      <div className="all-characters__item-body">
        <p className="all-characters__item-name">Name</p>
      </div>
    </li>
  );
}

function AllCharacters() {
  return (
    <section className="all-characters section">
      <div className="all-characters__container container">
        <h2 className="all-characters__title">All characters</h2>

        <div className="all-characters__body">
          <div className="all-characters__sidebar"></div>
          <div className="all-characters__catalog">
            <ul className="all-characters__list">
              <AllCharactersItem />
              <AllCharactersItem />
              <AllCharactersItem />
              <AllCharactersItem />
              <AllCharactersItem />
              <AllCharactersItem />
              <AllCharactersItem />
              <AllCharactersItem />
              <AllCharactersItem />
            </ul>
            <button className="all-characters__button button button_red">Load more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AllCharacters };
