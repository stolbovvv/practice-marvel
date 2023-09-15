import { RandomCharacter } from './components/random-character/random-character';
import { AllComics } from './components/all-comics/all-comics';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { SiteHero } from './components/site-hero/site-hero';
import { Slider } from './components/slider/slider';
import { AllCharacters } from './components/all-characters/all-characters';

function App() {
  return (
    <>
      <SiteHeader />
      <main className="main">
        <SiteHero title={'Marvel Data Base'} />
        <RandomCharacter />
        <Slider title={'Latest Charcaters'} />
        <Slider title={'Latest Comics'} />
        <AllCharacters />
        <AllComics />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
