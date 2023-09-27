import { RandomCharacter } from './components/random-character/random-character';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { SiteHero } from './components/site-hero/site-hero';
import { AllCharacters } from './components/all-characters/all-characters';

function App() {
  return (
    <>
      <SiteHeader />
      <main className="main">
        <SiteHero title={'Marvel Data Base'} />
        <RandomCharacter />
        <AllCharacters />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
