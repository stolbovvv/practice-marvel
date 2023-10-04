import { useCallback, useState } from 'react';
import { CharacterInfo } from '../character-info/character-info';
import { CharacterList } from '../character-list/character-list';

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
          <CharacterList className={'all-caharacters__list'} onSelect={onSelect} />
          <CharacterInfo className={'all-caharacters__info'} selected={selecetd} />
        </div>
      </div>
    </section>
  );
}

export { AllCharacters };
