import { SiteHero } from '../components/site-hero/site-hero';
import { SingleComic } from '../components/single-comic/single-comic';

function SingleComicPage() {
  return (
    <>
      <SiteHero title={'Marvel comic'} />
      <SingleComic />
    </>
  );
}

export default SingleComicPage;
