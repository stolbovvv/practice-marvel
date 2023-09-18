import './single-character.css';

function SingleCharacter() {
  return (
    <section className="single-character section">
      <div className="single-character__container container">
        <div className="single-character__head">
          <a className="single-character__link-back" href="/characters">
            Back to all characters
          </a>
        </div>

        <div className="single-character__body">
          <img className="single-character__img" src="https://placehold.co/400x400.png" alt="" />
          <div className="single-character__info">
            <h2 className="single-character__name">Character name</h2>
            <p className="single-character__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repudiandae accusamus delectus minus
              obcaecati quasi ad alias quaerat reiciendis pariatur.
            </p>
            <div className="single-character__links">
              <a className="single-character__link button button_red" href="#">
                Home page
              </a>
              <a className="single-character__link button" href="#">
                Wiki
              </a>
            </div>
            <div className="single-character__comics">
              <h3 className="single-character__comics-title">Comics:</h3>
              <ul className="single-character__comics-list">
                <li className="single-character__comics-item">
                  <a className="single-character__comics-link" href="#">
                    comics
                  </a>
                </li>
                <li className="single-character__comics-item">
                  <a className="single-character__comics-link" href="#">
                    comics
                  </a>
                </li>
                <li className="single-character__comics-item">
                  <a className="single-character__comics-link" href="#">
                    comics
                  </a>
                </li>
                <li className="single-character__comics-item">
                  <a className="single-character__comics-link" href="#">
                    comics
                  </a>
                </li>
                <li className="single-character__comics-item">
                  <a className="single-character__comics-link" href="#">
                    comics
                  </a>
                </li>
                <li className="single-character__comics-item">
                  <a className="single-character__comics-link" href="#">
                    comics
                  </a>
                </li>
                <li className="single-character__comics-item">
                  <a className="single-character__comics-link" href="#">
                    comics
                  </a>
                </li>
                <li className="single-character__comics-item">
                  <a className="single-character__comics-link" href="#">
                    comics
                  </a>
                </li>
                <li className="single-character__comics-item">
                  <a className="single-character__comics-link" href="#">
                    comics
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

export { SingleCharacter };
