import { Component } from 'react';
import { MarvelService } from '../../services/MarvelService';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { CharacterInfo } from '../character-info/character-info';
import { CharacterCatalog } from '../character-catalog/character-catalog';

import './all-characters.css';

class AllCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
    };

    this.marvelService = new MarvelService();
  }

  onSelect = (id) => {
    this.setState({
      selectedId: id,
    });
  };

  render() {
    return (
      <section className="all-characters section">
        <div className="all-characters__container container">
          <h2 className="all-characters__title">All characters</h2>

          <div className="all-characters__body">
            <ErrorBoundary>
              <CharacterCatalog className={'all-characters__catalog'} onSelect={this.onSelect} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharacterInfo className={'all-characters__sidebar'} charactreId={this.state.selectedId} />
            </ErrorBoundary>
          </div>
        </div>
      </section>
    );
  }
}

export { AllCharacters };
