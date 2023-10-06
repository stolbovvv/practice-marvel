import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/layout';
import { Spinner } from './components/spinner/spinner';

const HomePage = lazy(() => import('./pages/home-page'));
const ComicsPage = lazy(() => import('./pages/comics-page'));
const CharacterPage = lazy(() => import('./pages/characters-page'));
const SingleComicPage = lazy(() => import('./pages/single-comic-page'));
const SingleCharacterPage = lazy(() => import('./pages/single-character-page'));
const NotFoundPage = lazy(() => import('./pages/not-found-page'));

function App() {
  return (
    <Suspense fallback={<Spinner size="3rem" style={{ margin: 'auto' }} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="comics" element={<ComicsPage />} />
          <Route path="comics/:id" element={<SingleComicPage />} />
          <Route path="characters" element={<CharacterPage />} />
          <Route path="characters/:id" element={<SingleCharacterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
