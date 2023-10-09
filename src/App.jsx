import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/layout';
import { Spinner } from './components/spinner/spinner';
import { SingleComic } from './components/single-comic/single-comic';
import { SingleCharacter } from './components/single-character/single-character';

const HomePage = lazy(() => import('./pages/home-page'));
const SinglePage = lazy(() => import('./pages/single-page'));
const ComicsPage = lazy(() => import('./pages/comics-page'));
const CharactersPage = lazy(() => import('./pages/characters-page'));
const NotFoundPage = lazy(() => import('./pages/not-found-page'));

function App() {
  return (
    <Suspense fallback={<Spinner size="3rem" style={{ margin: 'auto' }} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="comics" element={<ComicsPage />} />
          <Route path="comics/:id" element={<SinglePage Component={SingleComic} endpoint={'comics'} />} />
          <Route path="characters" element={<CharactersPage />} />
          <Route path="characters/:id" element={<SinglePage Component={SingleCharacter} endpoint={'characters'} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
