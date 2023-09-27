import { Component } from 'react';
import { MarvelService } from '../../services/MarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './random-character.css';

function RandomCharacterView({ data }) {
  const style = {};
  const descr = { text: data.text };

  if (data.img.match('image_not_available')) {
    style.objectPosition = 'left bottom';
  }
  if (data.text.length > 150) {
    descr.text = data.text.slice(0, 150).trim() + '...';
  }

  return (
    <>
      <img className="random-character__main-img" src={data.img} alt="" style={style} />
      <div className="random-character__main-body">
        <h3 className="random-character__main-name">{data.name}</h3>
        <p className="random-character__main-text">{descr.text}</p>
        <div className="random-character__main-links">
          <a className="random-character__main-link button button_red" href={data.home}>
            Home page
          </a>
          <a className="random-character__main-link button" href={data.wiki}>
            Wiki
          </a>
        </div>
      </div>
    </>
  );
}

class RandomCharacter extends Component {
  constructor(props) {
    super(props);
    this.marvelService = new MarvelService();
    this.state = {
      character: {},
      isLoading: true,
      isError: false,
    };
  }

  onUpdate = (data) => {
    this.setState({
      isLoading: false,
      character: data,
    });
  };

  onLoading = () => {
    this.setState({
      isLoading: true,
      isError: false,
    });
  };

  onError = () => {
    this.setState({
      isLoading: false,
      isError: true,
    });
  };

  handleUpdate = () => {
    this.onLoading();
    this.marvelService
      .getCharacter(Math.floor(Math.random() * 500 + 1011000))
      .then((data) => this.onUpdate(data))
      .catch(() => this.onError());
  };

  componentDidMount() {
    this.handleUpdate();
  }

  render() {
    const { character, isLoading, isError } = this.state;

    const error = isError ? <ErrorMessage className={'random-character__main-error'} /> : null;
    const loading = isLoading ? <Spinner className={'random-character__main-spinner'} size="2.5rem" /> : null;
    const content = !isLoading && !isError ? <RandomCharacterView data={character} /> : null;

    return (
      <section className="random-character section">
        <div className="random-character__container container">
          <div className="random-character__head">
            <h2 className="random-character__title">Random character</h2>
          </div>
          <div className="random-character__body">
            <div className="random-character__main">{error || loading || content}</div>
            <div className="random-character__foot">
              <p className="random-character__foot-title">Do you want to get to know him better?</p>
              <div className="random-character__foot-last">
                <p className="random-character__foot-text">Or choose another one:</p>
                <button className="random-character__foot-button button button_red" onClick={this.handleUpdate}>
                  TRY IT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { RandomCharacter };
