import { Helmet } from 'react-helmet';
import { AllComics } from '../components/all-comics/all-comics';
import { SiteHero } from '../components/site-hero/site-hero';

function ComicsPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel data base. Page with all comics" />
        <title>All Comics – Marvel Data Base</title>
      </Helmet>
      <SiteHero title={'Marvel comics'} />
      <AllComics />
    </>
  );
}

export default ComicsPage;
