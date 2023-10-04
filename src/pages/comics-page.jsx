import { AllComics } from '../components/all-comics/all-comics';
import { SiteHero } from '../components/site-hero/site-hero';

function ComicsPage() {
  return (
    <>
      <SiteHero title={'Marvel comics'} />
      <AllComics />
    </>
  );
}

export default ComicsPage;
