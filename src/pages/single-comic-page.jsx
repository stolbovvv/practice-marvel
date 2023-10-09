import { SiteHero } from '../components/site-hero/site-hero';
import { SingleComic } from '../components/single-comic/single-comic';
import { Helmet } from 'react-helmet';

function SingleComicPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel data base. Comics page" />
        <title>Comics – Marvel Data Base</title>
      </Helmet>
      <SiteHero title={'Marvel comic'} />
      <SingleComic />
    </>
  );
}

export default SingleComicPage;
