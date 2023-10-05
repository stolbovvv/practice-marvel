import { memo } from 'react';
import { getImageStyles } from '../../utilites';

const CharacterListItem = memo(function CharacterListItem({ data, onSelect }) {
  const style = getImageStyles(data.image);

  const handleClick = () => {
    onSelect(data.id);
  };

  const handleKeyDown = (e) => {
    if (e.code && e.code === 'Space' && e.code === 'Enter') {
      e.preventDefault();
      onSelect(data.id);
    }
  };

  return (
    <li className="character-list__item" tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
      <img className="character-list__item-image" src={data.image} alt={`${data.name} image`} style={style} />
      <div className="character-list__item-body">
        <h3 className="character-list__item-name">{data.name}</h3>
      </div>
    </li>
  );
});

export { CharacterListItem };
