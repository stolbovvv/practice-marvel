import { RandomCharacter } from './components/random-character/random-character';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { SiteHero } from './components/site-hero/site-hero';

function App() {
  return (
    <>
      <SiteHeader />
      <main className="site-main">
        <SiteHero title={'Marvel data base'} />
        <RandomCharacter />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
