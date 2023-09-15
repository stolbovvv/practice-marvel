import './random-character.css';

function RandomCharacterData() {
  return (
    <>
      <img className="random-character__main-img" src="https://placehold.co/300x300.png" alt="" />
      <div className="random-character__main-body">
        <h3 className="random-character__main-name">Character name</h3>
        <p className="random-character__main-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis accusamus repudiandae minima. Quasi possimus quo
          adipisci consectetur nostrum quaerat quia?
        </p>
        <div className="random-character__main-links">
          <a className="random-character__main-link button button_red" href="#">
            Home page
          </a>
          <a className="random-character__main-link button" href="#">
            Wiki
          </a>
        </div>
      </div>
    </>
  );
}

function RandomCharacter() {
  return (
    <section className="random-character section">
      <div className="random-character__container container">
        <div className="random-character__head">
          <h2 className="random-character__title">Random character</h2>
        </div>
        <div className="random-character__body">
          <div className="random-character__main">
            <RandomCharacterData />
          </div>
          <div className="random-character__foot">
            <p className="random-character__foot-title">Do you want to get to know him better?</p>
            <div className="random-character__foot-last">
              <p className="random-character__foot-text">Or choose another one:</p>
              <button className="random-character__foot-button button button_red">TRY IT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { RandomCharacter };
