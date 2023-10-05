import { CharacterListItem } from './character-list-item';

function CharacterListBody({ data, onSelect }) {
  return (
    <ul className="character-list__body">
      {data.map((item) => (
        <CharacterListItem key={item.id} data={item} onSelect={onSelect} />
      ))}
    </ul>
  );
}

export { CharacterListBody };
