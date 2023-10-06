import { SiteHero } from '../components/site-hero/site-hero';
import { SingleCharacter } from '../components/single-character/single-character';

function SingleCharacterPage() {
  return (
    <>
      <SiteHero title={'Marvel character'} />
      <SingleCharacter />
    </>
  );
}

export default SingleCharacterPage;
