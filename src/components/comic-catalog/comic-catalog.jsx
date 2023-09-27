import { Component } from 'react';
import { MarvelService } from '../../services/MarvelService';
import { ErrorMessage } from '../error-message/error-message';
import { Spinner } from '../spinner/spinner';

import './comic-catalog.css';

function ComicCatalogListItem({ img, name, price, href }) {
  const style = {};

  if (img.match('image_not_available')) {
    style.objectPosition = 'left bottom';
  }

  return (
    <li className="comic-catalog__list-item">
      <a className="comic-catalog__list-item-link" href={href}>
        <img className="comic-catalog__list-item-img" src={img} alt={name} style={style} />
        <span className="comic-catalog__list-item-body">
          <span className="comic-catalog__list-item-name">{name}</span>
          <span className="comic-catalog__list-item-price">{price}</span>
        </span>
      </a>
    </li>
  );
}

function ComicCatalogList({ data }) {
  return (
    <ul className="comic-catalog__list">
      {data.map(({ id, img, name, price, href }, index) => (
        <ComicCatalogListItem key={`${id}_${index}`} img={img} name={name} price={price} href={href} />
      ))}
    </ul>
  );
}

class ComicCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
      isLoading: true,
      isError: false,
      isEnded: false,
      offset: 0,
    };

    this.marvelService = new MarvelService();
    this.marvelServiceLimit = 12;
  }

  onError = () => {
    this.setState({
      isLoading: false,
      isError: false,
    });
  };

  onLoading = () => {
    this.setState({
      isLoading: true,
      isError: false,
    });
  };

  onUpdate = (data) => {
    this.setState(({ comics, offset }) => ({
      comics: [...comics, ...data],
      isLoading: false,
      isEnded: false,
      offset: offset + this.marvelServiceLimit,
    }));
  };

  updateComics = () => {
    this.onLoading();
  };

  componentDidMount() {
    this.updateComics();
  }

  render() {
    const { className } = this.props;
    const { comics, isLoading, isError } = this.state;

    const error = isError ? <ErrorMessage className={'comic-catalog__error'} /> : null;
    const content = !isError ? <ComicCatalogList data={comics} /> : null;

    return (
      <div className={['comic-catalog', className].join(' ').trim()}>
        {error || content}
        <button className="comic-catalog__button button button__red" onClick={this.updateComics} disabled={isLoading}>
          {isLoading ? <Spinner size="1.25rem" /> : 'Load more'}
        </button>
      </div>
    );
  }
}

export { ComicCatalog };
