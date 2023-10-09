import { Helmet } from 'react-helmet';
import { RandomCharacter } from '../components/random-character/random-character';
import { SiteHero } from '../components/site-hero/site-hero';

function HomePage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel data base. Home page with random character" />
        <title>Marvel Data Base</title>
      </Helmet>
      <SiteHero title={'Marvel data base'} />
      <RandomCharacter />
    </>
  );
}

export default HomePage;
