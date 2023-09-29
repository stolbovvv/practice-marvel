import { ComicCatalog } from '../comic-catalog/comic-catalog';
import { ErrorBoundary } from '../error-boundary/error-boundary';

import './all-comics.css';

function AllComics() {
  return (
    <section className="all-comics section">
      <div className="all-comics__container container">
        <h2 className="all-comics__title">All comics</h2>

        <div className="all-comics__body">
          <ErrorBoundary>
            <ComicCatalog className={'all-comics__catalog'} />
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}

export { AllComics };
