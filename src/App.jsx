import { RandomCharacter } from './components/random-character/random-character';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { SiteHero } from './components/site-hero/site-hero';
import { Slider } from './components/slider/slider';
import { AllCharacters } from './components/all-characters/all-characters';
import { AllComics } from './components/all-comics/all-comics';
import { SingleCharacter } from './components/single-character/single-character';
import { SingleComics } from './components/single-comics/single-comics';

function App() {
  return (
    <>
      <SiteHeader />
      <main className="main">
        <SiteHero title={'Marvel Data Base'} />
        <SingleComics />
        <SingleCharacter />
        <RandomCharacter />
        <Slider title={'Latest Charcaters'} />
        <AllCharacters />
        <Slider title={'Latest Comics'} />
        <AllComics />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
