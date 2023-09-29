import { Component } from 'react';
import { MarvelService } from '../../services/MarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './character-catalog.css';

function CharacterCatalogListItem({ img, name, onSelect }) {
  const style = {};

  if (img.match('image_not_available')) {
    style.objectPosition = 'left bottom';
  }

  const onKeyDown = (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      onSelect();
    }

    if (e.code === 'Enter') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <li className="character-catalog__list-item" tabIndex={0} onClick={onSelect} onKeyDown={onKeyDown}>
      <img className="character-catalog__list-item-img" src={img} alt={name} style={style} />
      <div className="character-catalog__list-item-body">
        <span className="character-catalog__list-item-name">{name}</span>
      </div>
    </li>
  );
}

function CharacterCatalogList({ data, onSelect }) {
  return (
    <ul className="character-catalog__list">
      {data.map(({ id, img, name }) => (
        <CharacterCatalogListItem key={id} img={img} name={name} onSelect={() => onSelect(id)} />
      ))}
    </ul>
  );
}

class CharacterCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charactres: [],
      isLoading: true,
      isError: false,
      isEnded: false,
      offset: 0,
    };

    this.marvelService = new MarvelService();
    this.marvelServiceLimit = 9;
  }

  onError = () => {
    this.setState({
      isLoading: false,
      isError: true,
    });
  };

  onLoading = () => {
    this.setState({
      isLoading: true,
      isError: false,
    });
  };

  onUpdate = (data) => {
    this.setState(({ charactres, offset }) => ({
      charactres: [...charactres, ...data],
      isLoading: false,
      isEnded: data.length < this.marvelServiceLimit,
      isError: false,
      offset: offset + this.marvelServiceLimit,
    }));
  };

  updateCharacters = () => {
    this.onLoading();
    this.marvelService
      .getCharacters({ limit: this.marvelServiceLimit, offset: this.state.offset })
      .then((data) => this.onUpdate(data))
      .catch((err) => this.onError(err));
  };

  componentDidMount() {
    this.updateCharacters();
  }

  render() {
    const { className, onSelect } = this.props;
    const { charactres, isLoading, isEnded, isError } = this.state;

    const error = isError ? <ErrorMessage className={'character-catalog__error'} /> : null;
    const content = !isError ? <CharacterCatalogList data={charactres} onSelect={onSelect} /> : null;

    return (
      <div className={['character-catalog', className].join(' ').trim()}>
        {error || content}
        <button
          ref={this.ref}
          className="character-catalog__button button button_red"
          style={{ display: isEnded ? 'none' : 'block' }}
          onClick={this.updateCharacters}
          disabled={isLoading}
        >
          {isLoading ? <Spinner size="1.25rem" /> : 'Load more'}
        </button>
      </div>
    );
  }
}

export { CharacterCatalog };
