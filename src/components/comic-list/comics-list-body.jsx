import { ComicListItem } from './comics-list-item';

function ComicListBody({ data }) {
  return (
    <ul className="comic-list__body">
      {data.map((item, index) => (
        <ComicListItem key={`${item.id}_${index}`} data={item} />
      ))}
    </ul>
  );
}

export { ComicListBody };
