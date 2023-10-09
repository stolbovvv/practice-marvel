import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiMarvelService } from '../services/apiMarvelService';
import { ErrorMessage } from '../components/error-message/error-message';
import { Spinner } from '../components/spinner/spinner';
import { Helmet } from 'react-helmet';
import { SiteHero } from '../components/site-hero/site-hero';

function SinglePage({ Component, endpoint }) {
  const { id } = useParams();

  const [process, setProcess] = useState('pending');
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const updateData = () => {
    setError(null);
    setProcess('loading');

    switch (endpoint) {
      case 'comics':
        apiMarvelService
          .getSingleComic({ id: id })
          .then((data) => {
            setData(data[0]);
            setProcess('success');
          })
          .catch((error) => {
            setError(error);
            setProcess('failure');
          });
        break;

      case 'characters':
        apiMarvelService
          .getSingleCharacter({ id: id })
          .then((data) => {
            setData(data[0]);
            setProcess('success');
          })
          .catch((error) => {
            setError(error);
            setProcess('failure');
          });
        break;

      default:
        setProcess('failure');
        throw new Error('Unexpected endpoint received');
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <>
      {process === 'success' && endpoint === 'comics' && (
        <Helmet>
          <meta name="description" content={`Marvel data base. ${data.title} comic book`} />
          <title>{data.title} – Marvel Data Base</title>
        </Helmet>
      )}

      {process === 'success' && endpoint === 'characters' && (
        <Helmet>
          <meta name="description" content={`Marvel data base. ${data.name} character`} />
          <title>{data.name} – Marvel Data Base</title>
        </Helmet>
      )}

      {endpoint === 'comics' && <SiteHero title={'Marvel comic book'} />}
      {endpoint === 'characters' && <SiteHero title={'Marvel charactre'} />}

      {process === 'loading' && <Spinner size="3rem" style={{ margin: 'auto' }} />}
      {process === 'failure' && <ErrorMessage className={'container'} info={error.message} />}
      {process === 'success' && <Component data={data} />}
    </>
  );
}

export default SinglePage;
