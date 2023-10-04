import { setImageStyles } from '../../utilites';

function CharacterIistItem({ data, onSelect }) {
  const style = setImageStyles(data.image);

  const handleKeyDown = (e) => {
    if (e.code && e.code === 'Space') {
      e.preventDefault();
      onSelect();
    }

    if (e.code && e.code === 'Enter') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <li className="character-list__item" key={data.id} tabIndex={0} onClick={onSelect} onKeyDown={handleKeyDown}>
      <img className="character-list__item-image" src={data.image} alt={`${data.name} image`} style={style} />
      <div className="character-list__item-body">
        <h3 className="character-list__item-name">{data.name}</h3>
      </div>
    </li>
  );
}

export { CharacterIistItem };
