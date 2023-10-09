import { Helmet } from 'react-helmet';
import { NotFound } from '../components/not-found/not-found';

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel data base. Not found page" />
        <title>404: Not fund – Marvel Data Base</title>
      </Helmet>
      <NotFound />
    </>
  );
}

export default NotFoundPage;
