import { getImageStyles, getDescriptionText } from '../../utilites';

function RandomCharacterContent({ data }) {
  const descr = getDescriptionText(data.descr);
  const style = getImageStyles(data.image);

  return (
    <div className="random-character__content">
      <img className="random-character__content-image" src={data.image} alt={data.name + ' image'} style={style} />
      <div className="random-character__content-body">
        <p className="random-character__content-name">{data.name}</p>
        <p className="random-character__content-text">{descr || 'Chatacter description not found...'}</p>
        <div className="random-character__content-footer">
          <a className="button button_red" href={data.home} target="_blank" rel="noopener noreferrer">
            Home page
          </a>
          <a className="button button_black" href={data.wiki} target="_blank" rel="noopener noreferrer">
            Wiki
          </a>
        </div>
      </div>
    </div>
  );
}

export { RandomCharacterContent };
