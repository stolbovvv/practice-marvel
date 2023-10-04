import { memo } from 'react';
import { setImageStyles } from '../../utilites';

const CharacterIistItem = memo(function CharacterIistItem({ data, onSelect }) {
  const style = setImageStyles(data.image);

  const handleClick = () => {
    onSelect(data.id);
  };

  const handleKeyDown = (e) => {
    if (e.code && e.code === 'Space') {
      e.preventDefault();
      onSelect(data.id);
    }

    if (e.code && e.code === 'Enter') {
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

export { CharacterIistItem };
