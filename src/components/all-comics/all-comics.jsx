import { ComicList } from '../comic-list/comics-list';

import './all-comics.css';

function AllComics() {
  return (
    <section className="section all-comics">
      <div className="container all-comics__container">
        <h2 className="title all-comics__title">All comics</h2>

        <div className="all-comics__body">
          <ComicList />
        </div>
      </div>
    </section>
  );
}

export { AllComics };
