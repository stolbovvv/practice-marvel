import './character-info.css';

function CharacterInfo({ className }) {
  return (
    <section className={['character-info', className].join(' ').trim()}>
      <div className="character-info__head">
        <img className="character-info__head-img" src="https://placehold.co/300x300.png" alt="" />
        <div className="character-info__head-body">
          <h3 className="character-info__head-name">Name</h3>
          <a className="character-info__head-link button button_red" href="#">
            Home page
          </a>
          <a className="character-info__head-link button" href="#">
            Wiki
          </a>
        </div>
      </div>
      <div className="character-info__text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt nisi aliquam voluptatibus rem, ipsam
          excepturi nemo magni nam voluptatem.
        </p>
      </div>
      <div className="character-info__comics">
        <h4 className="character-info__comics-title">Comics:</h4>
        <ul className="character-info__comics-list">
          <li className="character-info__comics-item">
            <a className="character-info__comics-link" href="#">
              Comics
            </a>
          </li>
          <li className="character-info__comics-item">
            <a className="character-info__comics-link" href="#">
              Comics
            </a>
          </li>
          <li className="character-info__comics-item">
            <a className="character-info__comics-link" href="#">
              Comics
            </a>
          </li>

          <li className="character-info__comics-item">
            <a className="character-info__comics-link" href="#">
              Comics
            </a>
          </li>
          <li className="character-info__comics-item">
            <a className="character-info__comics-link" href="#">
              Comics
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export { CharacterInfo };
