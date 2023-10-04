import { RandomCharacter } from '../components/random-character/random-character';
import { SiteHero } from '../components/site-hero/site-hero';

function HomePage() {
  return (
    <>
      <SiteHero title={'Marvel data base'} />
      <RandomCharacter />
    </>
  );
}

export default HomePage;
