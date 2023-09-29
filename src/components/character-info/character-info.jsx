import { Component } from 'react';
import { MarvelService } from '../../services/MarvelService';
import { ErrorMessage } from '../error-message/error-message';

import './character-info.css';
import { Spinner } from '../spinner/spinner';

function CharacterInfoContent({ data }) {
  const style = {};
  const comics = [];

  if (data.img.match('image_not_available')) {
    style.objectPosition = 'left bottom';
  }

  for (let index = 0; index < data.comics.length; index += 1) {
    if (index >= 5) break;
    comics.push(data.comics[index]);
  }

  return (
    <div className="character-info__body">
      <div className="character-info__head">
        <img className="character-info__head-img" src={data.img} alt={data.name} style={style} />
        <div className="character-info__head-body">
          <h3 className="character-info__head-name">{data.name}</h3>
          <a className="character-info__head-link button button_red" href={data.home}>
            Home page
          </a>
          <a className="character-info__head-link button" href={data.wiki}>
            Wiki
          </a>
        </div>
      </div>
      <div className="character-info__text">
        <p>{data.text}</p>
      </div>
      <div className="character-info__comics">
        <h4 className="character-info__comics-title">Comics{comics.length ? ':' : ' not found'}</h4>
        {comics.length ? (
          <ul className="character-info__comics-list">
            {comics.map(({ name }, index) => (
              <li key={index} className="character-info__comics-item">
                {name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function CharacterInfoLoading() {
  return (
    <div className="character-info__loading">
      <p className="character-info__loading-text">Loading...</p>
      <Spinner className={'character-info__loading-spinner'} />
    </div>
  );
}

function CharacterInfoPlaceholder() {
  return (
    <div className="character-info__placeholder">
      <p className="character-info__placeholder-text">Select character</p>
    </div>
  );
}

class CharacterInfo extends Component {
  constructor(props) {
    super(props);
    this.marvelService = new MarvelService();
    this.state = {
      character: null,
      isLoading: false,
      isError: false,
    };
  }

  onLoading = () => {
    this.setState({
      isLoading: true,
      isError: false,
    });
  };

  onOpdate = (data) => {
    this.setState({
      character: data,
      isLoading: false,
      isError: false,
    });
  };

  onError = (err) => {
    this.setState({
      isLoading: false,
      isError: true,
      error: err,
    });
  };

  handleUpdate = () => {
    if (!this.props.charactreId) return;

    this.onLoading();
    this.marvelService
      .getCharacter(this.props.charactreId)
      .then((data) => this.onOpdate(data))
      .catch((err) => this.onError(err));
  };

  componentDidUpdate(prevProps) {
    if (prevProps.charactreId !== this.props.charactreId && this.props.charactreId) this.handleUpdate();
  }

  render() {
    const { className } = this.props;
    const { character, isLoading, isError } = this.state;

    const error = isError ? <ErrorMessage className={'character-info__error'} /> : null;
    const loading = isLoading ? <CharacterInfoLoading /> : null;
    const content = !isError && !isLoading && character ? <CharacterInfoContent data={character} /> : null;
    const placeholder = !isError && !isLoading && !character ? <CharacterInfoPlaceholder /> : null;

    return (
      <aside className={['character-info', className].join(' ').trim()}>
        {error || loading || content || placeholder}
      </aside>
    );
  }
}

export { CharacterInfo };
