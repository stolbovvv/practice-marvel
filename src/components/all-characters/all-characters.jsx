import { useState } from 'react';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { CharacterInfo } from '../character-info/character-info';
import { CharacterCatalog } from '../character-catalog/character-catalog';

import './all-characters.css';

function AllCharacters() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="all-characters section">
      <div className="all-characters__container container">
        <h2 className="all-characters__title">All characters</h2>
        <div className="all-characters__body">
          <ErrorBoundary>
            <CharacterCatalog className={'all-characters__catalog'} onSelect={(id) => setSelectedId(id)} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharacterInfo className={'all-characters__sidebar'} charactreId={selectedId} />
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}

export { AllCharacters };
