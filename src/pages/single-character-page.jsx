import { SiteHero } from '../components/site-hero/site-hero';
import { SingleCharacter } from '../components/single-character/single-character';
import { Helmet } from 'react-helmet';

function SingleCharacterPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel data base. Character page" />
        <title>Character – Marvel Data Base</title>
      </Helmet>
      <SiteHero title={'Marvel character'} />
      <SingleCharacter />
    </>
  );
}

export default SingleCharacterPage;
