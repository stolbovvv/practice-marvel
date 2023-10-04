import { AllCharacters } from '../components/all-caharacters/all-caharacters';
import { SiteHero } from '../components/site-hero/site-hero';

function CharacterPage() {
  return (
    <>
      <SiteHero title={'Marvel characters'} />
      <AllCharacters />
    </>
  );
}

export default CharacterPage;
