import { Helmet } from 'react-helmet';
import { AllCharacters } from '../components/all-caharacters/all-caharacters';
import { SiteHero } from '../components/site-hero/site-hero';

function CharactersPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel data base. Page with all characters" />
        <title>All Characters – Marvel Data Base</title>
      </Helmet>
      <SiteHero title={'Marvel characters'} />
      <AllCharacters />
    </>
  );
}

export default CharactersPage;
