import { useCallback, useState } from 'react';
import { CharacterInfo } from '../character-info/character-info';
import { CharacterList } from '../character-list/character-list';
import { CharacterSearch } from '../character-search/character-search';

import './all-caharacters.css';

function AllCharacters() {
  const [selecetd, setSeleced] = useState(null);

  const onSelect = useCallback((id) => {
    setSeleced(id);
  }, []);

  return (
    <section className="section all-caharacters">
      <div className="container all-caharacters__container">
        <h2 className="title all-caharacters__title">All characters</h2>

        <div className="all-caharacters__body">
          <div className="all-caharacters__list">
            <CharacterList onSelect={onSelect} />
          </div>
          <div className="all-caharacters__sidebar">
            <CharacterInfo selected={selecetd} />
            <CharacterSearch />
          </div>
        </div>
      </div>
    </section>
  );
}

export { AllCharacters };
